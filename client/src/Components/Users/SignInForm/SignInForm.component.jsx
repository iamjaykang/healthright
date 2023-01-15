import React, { useState } from "react";
import Button from "../../../App/Common/Button/Button.common";
import MyTextInput from "../../../App/Common/Form/MyTextInput.common";
import "./SignInForm.css";
import { useDispatch } from "react-redux";
import {
  emailSignInLoading,
  googleSignInLoading,
} from "../../../stores/user/user.action";

const initialFormValues = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const { email, password } = formValues;
  const dispatch = useDispatch();

  const resetFormValues = () => {
    setFormValues(initialFormValues);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(emailSignInLoading(email, password));
      resetFormValues();
    } catch (error) {
      throw error;
    }
  };

  const signInWithGoogle = () => {
    dispatch(googleSignInLoading());
  };
  return (
    <div className="sign-in-container">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <MyTextInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <MyTextInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="btns-container">
          <Button type="submit">Sign In</Button>
          <Button btnType="google" onClick={signInWithGoogle}>
            Sign in with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
