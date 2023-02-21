import React, { useState } from "react";
import Button from "../../../app/common/button/Button.common";
import MyTextInput from "../../../app/common/form/MyTextInput.common";
import { useDispatch } from "react-redux";
import {
  emailSignInLoading,
  googleSignInLoading,
} from "../../../app/stores/user/user.action";

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

  const handleSubmit = (e) => {
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
      <form className="app__auth-form" onSubmit={handleSubmit}>
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
        <div className="app__auth-form-btns-container">
          <Button type="submit">Sign In</Button>
          <Button btnType="google" onClick={signInWithGoogle}>
            Sign in with Google
          </Button>
        </div>
      </form>
  );
};

export default SignInForm;
