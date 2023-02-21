import React from "react";
import ButtonSpinner from "../buttonSpinner/ButtonSpinner.common";

const BUTTON_TYPES_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, btnType, isLoading, ...otherProps }) => {
  return (
    <button
      className={`btn-container ${BUTTON_TYPES_CLASSES[btnType]}`}
      {...otherProps}
      disabled={isLoading}
    >
      {isLoading ? <ButtonSpinner /> : children}
    </button>
  );
};

export default Button;
