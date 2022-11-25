import { useState } from 'react';
import { BUTTON_TYPE_CLASSES, Button } from '../button/button.component';
import FormInput from '../form-input/form-input.component';
import {
  signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword
} from '../../utils/firebase.utils';

import './sign-in-form.styles.scss';

const defaultFormFields = {
  signInEmail: '',
  signInPassword: ''
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { signInEmail, signInPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!signInEmail || !signInPassword) {
      alert('Empty value');
    }

    try {
      await signInAuthUserWithEmailAndPassword(signInEmail, signInPassword);
      alert('Sign In Success');
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong password':
          alert('Incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('No user associated with this email');
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const signInWithGoogle = async () => {
    const response = await signInWithGooglePopup();
    await createUserDocumentFromAuth(response.user);
    alert('Signed in with Google');
  };

  return (
    <div className="sign-in-container">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="email"
          inputOptions={{
            type: 'email',
            required: true,
            id: 'signInEmail',
            onChangeHandler: handleChange,
            name: 'signInEmail',
            value: signInEmail
          }}
        />
        <FormInput
          label="password"
          inputOptions={{
            type: 'password',
            required: true,
            id: 'signInPassword',
            onChangeHandler: handleChange,
            name: 'signInPassword',
            value: signInPassword
          }}
        />
        <div className="buttons-container">
          <Button submit>Sign In</Button>
          <Button buttonType={BUTTON_TYPE_CLASSES.google} clickHandler={signInWithGoogle}>
            Sign In With Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
