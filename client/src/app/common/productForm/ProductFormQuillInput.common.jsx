import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const ProductFormQuillInput = ({ label, ...otherProps }) => {
  return (
    <div className="dashboard__add-product-input-group">
      {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : null
          } dashboard__add-product-label`}
        >
          {label}
        </label>
      )}
      <div className=".dashboard__add-product-html-container">
        <ReactQuill className="dashboard__add-product-html" {...otherProps} />
      </div>
    </div>
  );
};

export default ProductFormQuillInput;
