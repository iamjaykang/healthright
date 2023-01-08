import React from "react";
import "./Button.css";

/*
default

inverted

google sign in
*/

const BUTTON_TYPES_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, btnType, ...otherProps }) => {
  return (
    <button
      className={`btn-container ${BUTTON_TYPES_CLASSES[btnType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
