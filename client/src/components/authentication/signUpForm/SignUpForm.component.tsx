import React, { ChangeEvent, FormEvent, useState } from "react";
import MyTextInput from "../../../app/common/form/MyFormInput.common";
import Button from "../../../app/common/button/Button.common";
import { useDispatch } from "react-redux";
import { signUpLoading } from "../../../app/stores/user/user.action";

const initialFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState(initialFormValues);
  const { firstName, lastName, email, password, confirmPassword } = formValues;

  const resetFormValues = () => {
    setFormValues(initialFormValues);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      dispatch(signUpLoading(email, password, firstName, lastName));
      resetFormValues();
    } catch (error) {
      throw error;
    }
  };

  return (
    <form className="app__auth-form" onSubmit={handleSubmit}>
      <MyTextInput
        label="First Name"
        type="text"
        required
        onChange={handleChange}
        name="firstName"
        value={firstName}
      />
      <MyTextInput
        label="Last Name"
        type="text"
        required
        onChange={handleChange}
        name="lastName"
        value={lastName}
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
      <div className="app__auth-form-btns-container">
        <Button btnType="inverted" type="submit">
          Sign Up
        </Button>
      </div>
    </form>
  );
};

export default SignUpForm;
