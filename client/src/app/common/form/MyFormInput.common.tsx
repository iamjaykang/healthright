import React, { FC, InputHTMLAttributes } from "react";

type FormInputProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

const MyFormInput: FC<FormInputProps> = ({ label, ...otherProps }) => {
  return (
    <div className="form-input-group">
      <input className="form-input" {...otherProps} />
      {label && (
        <label
          className={`form-input-label${
            Boolean(
              otherProps.value &&
                typeof otherProps.value === "string" &&
                otherProps.value.length
            )
              ? " shrink"
              : ""
          }`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default MyFormInput;
