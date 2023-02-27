import React, { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../../../../app/common/button/Button.common";
import MyTextInput from "../../../../app/common/form/MyFormInput.common";
import { adminEmailSignInLoading } from "../../../../app/stores/user/user.action";

const initialFormValues = {
  email: "",
  password: "",
};

const AdminSignInForm = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const { email, password } = formValues;
  const dispatch = useDispatch();

  const resetFormValues = () => {
    setFormValues(initialFormValues);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      dispatch(adminEmailSignInLoading(email, password));
      resetFormValues();
    } catch (error) {
      throw error;
    }
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
        <Button type="submit">SIGN IN</Button>
      </div>
    </form>
  );
};

export default AdminSignInForm;
