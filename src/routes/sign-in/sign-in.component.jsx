// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import {
  signInWithGooglePopup, createUserDocumentFromAuth
} from '../../utils/firebase.utils';

const SignIn = () => {
  // useEffect(() => {
  //   const getResponse = async () => {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //       console.log(userDocRef);
  //     }
  //   };
  //   getResponse();
  // }, []);

  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(response.user);
    console.log(userDocRef);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button type="button" onClick={logGoogleUser}>
        Sign in with Google
      </button>
      {/* <button type="button" onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button> */}

      <SignUpForm />
    </div>
  );
};

export default SignIn;
