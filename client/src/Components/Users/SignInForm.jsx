import React from "react";

const SignInForm = ({logGoogleUser}) => {
  return (
    <div>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </div>
  );
};

export default SignInForm;
