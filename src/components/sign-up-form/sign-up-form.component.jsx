import { useState } from 'react';

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase.utils';
import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';

import './sign-up-form.styles.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const {
    displayName, email, password, confirmPassword
  } = formFields;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Password do not match');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      const userDoc = await createUserDocumentFromAuth(user, { displayName });
      console.log(userDoc);
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use');
      }
      console.log('Failed to sign up', error.message);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don&apos;t have an account ?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="DisplayName"
          inputOptions={{
            type: 'text',
            required: true,
            id: displayName,
            onChangeHandler: handleChange,
            name: 'displayName',
            value: displayName
          }}
        />

        <FormInput
          label="Email"
          inputOptions={{
            type: 'email',
            required: true,
            id: 'email',
            onChangeHandler: handleChange,
            name: 'email',
            value: email
          }}
        />

        <FormInput
          label="Password"
          inputOptions={{
            type: 'password',
            required: true,
            id: 'password',
            onChangeHandler: handleChange,
            name: 'password',
            value: password
          }}
        />

        <FormInput
          label="Confirm Password"
          inputOptions={{
            type: 'password',
            required: true,
            id: 'confirmPassword',
            onChangeHandler: handleChange,
            name: 'confirmPassword',
            value: confirmPassword
          }}
        />

        <Button buttonType="google" submit>Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
