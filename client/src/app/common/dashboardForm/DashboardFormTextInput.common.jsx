import React from "react";

const DashboardFormTextInput = ({ label, ...otherProps }) => {
  return (
    <div className="dashboard__input-group">
      {label && <label className="dashboard__input-label">{label}</label>}
      <input className="dashboard__input" {...otherProps} />
    </div>
  );
};

export default DashboardFormTextInput;
