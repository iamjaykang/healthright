import React from "react";
import SignInForm from "../../Components/Users/SignInForm";
import SignUpForm from "../../Components/Users/SignUpForm";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h2>Sign in page</h2>{" "}
      <SignInForm logGoogleUser={logGoogleUser}/>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
