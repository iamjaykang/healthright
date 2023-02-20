import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const DashboardFormQuillInput = ({ label, ...otherProps }) => {
  return (
    <div className="dashboard__input-group">
      {label && <label className="dashboard__label">{label}</label>}
      <div className="dashboard__html-editor-container">
        <ReactQuill className="dashboard__html-editor" {...otherProps} />
      </div>
    </div>
  );
};

export default DashboardFormQuillInput;
