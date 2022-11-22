// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

import './authentication.styles.scss';

const Authentication = () => {
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

  return (
    <div className="authentication-container">
      <SignInForm />
      {/* <button type="button" onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button> */}

      <SignUpForm />
    </div>
  );
};

export default Authentication;
