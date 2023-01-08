import React from "react";
import "./MyTextInput.css";

const MyTextInput = ({ label, ...otherProps }) => {
  return (
    <div className="form-input-group">
        <input className="form-input" {...otherProps} />
      {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : null
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default MyTextInput;
