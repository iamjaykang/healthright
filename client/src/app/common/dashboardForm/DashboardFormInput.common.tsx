import React, { FC, InputHTMLAttributes } from "react";

type FormInputProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

const DashboardFormInput: FC<FormInputProps> = ({ label, ...otherProps }) => {
  return (
    <div className="dashboard__input-group">
      {label && <label className="dashboard__input-label">{label}</label>}
      <input className="dashboard__input" {...otherProps} />
    </div>
  );
};

export default DashboardFormInput;
