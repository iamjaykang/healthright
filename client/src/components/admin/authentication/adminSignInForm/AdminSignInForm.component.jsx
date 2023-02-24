import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../../../app/common/button/Button.common";
import MyTextInput from "../../../../app/common/form/MyTextInput.common";
import { adminEmailSignInLoading } from "../../../../app/stores/user/user.action";
import { selectCurrentUser } from "../../../../app/stores/user/user.selector";

const initialFormValues = {
  email: "",
  password: "",
};

const AdminSignInForm = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const { email, password } = formValues;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentUser = useSelector(selectCurrentUser);

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
      dispatch(adminEmailSignInLoading(email, password));
      resetFormValues();
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    if (currentUser && currentUser.user.isAdmin) {
      navigate("/admin/dashboard/overview");
    }
  }, [currentUser, navigate]);

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
