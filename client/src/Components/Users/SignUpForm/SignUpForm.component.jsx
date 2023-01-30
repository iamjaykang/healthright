import React, { useState } from "react";
import MyTextInput from "../../../App/Common/Form/MyTextInput.common";
import "./SignUpForm.css";
import Button from "../../../App/Common/Button/Button.common";
import { useDispatch } from "react-redux";
import { signUpLoading } from "../../../stores/user/user.action";

const initialFormValues = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = ({ setFormType }) => {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState(initialFormValues);
  const { displayName, email, password, confirmPassword } = formValues;

  const resetFormValues = () => {
    setFormValues(initialFormValues);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      dispatch(signUpLoading(email, password, displayName));
      resetFormValues();
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <p className="form-action-container">
        <span>
          Sign up with your email and password or
          <button className="link-btn" onClick={() => setFormType("sign in")}>
            Sign in instead
          </button>
        </span>
      </p>
      <form onSubmit={handleSubmit}>
        <MyTextInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
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
        <MyTextInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <div className="btns-container">
          <Button btnType="inverted" type="submit">
            Sign Up
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
