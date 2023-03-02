import React, { FC, SelectHTMLAttributes } from "react";

type FormSelectProps = {
  label: string;
  options: { value: string | number, label: string }[];
} & SelectHTMLAttributes<HTMLSelectElement>;

const DashboardFormSelect: FC<FormSelectProps> = ({ label, options, ...otherProps }) => {
  const firstWord = label.split(" ")[0];
  const article = /^[aeiou]/i.test(firstWord) ? "an" : "a";
  return (
    <div className="dashboard__select-group">
      <span className="dashboard__select-label">{label}</span>
      <select className="dashboard__select" {...otherProps}>
        <option value="">{`Select ${article} ${label}`}</option>
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DashboardFormSelect;
