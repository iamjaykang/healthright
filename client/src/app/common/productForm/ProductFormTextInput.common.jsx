import React from "react";

const ProductFormTextInput = ({ label, ...otherProps }) => {
  return (
    <div className="dashboard__add-product-input-group">
      {label && <label className="dashboard__add-product-label">{label}</label>}
      <input className="dashboard__add-product-input" {...otherProps} />
    </div>
  );
};

export default ProductFormTextInput;
