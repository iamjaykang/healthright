import React from "react";

const MyTextInput = ({ label, ...otherProps }) => {
  return (
    <div className="form-input-group">
      <input className="form-input" {...otherProps} />
      {label && (
        <label
          className={`form-input-label${
            otherProps.value.length ? " shrink" : ""
          }`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default MyTextInput;
