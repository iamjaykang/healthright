import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import { useDispatch } from "react-redux";
import DashboardFormQuillInput from "../../../../../app/common/dashboardForm/DashboardFormQuillInput.common";
import DashboardFormTextInput from "../../../../../app/common/dashboardForm/DashboardFormTextInput.common";
import { addProductLoading } from "../../../../../app/stores/products/product.action";

const initialFormData = {
  name: "",
  description: "",
  productImage: "",
  price: "",
  qtyInStock: "",
  categoryName: "",
  vendorName: "",
  cost: "",
  productLive: false,
};

const AdminAddProduct = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialFormData);
  const {
    name,
    description,
    productImage,
    price,
    qtyInStock,
    categoryName,
    vendorName,
    cost,
    productLive,
  } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleQuillInputChange = (value) => {
    setFormData({ ...formData, description: value });
};

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      dispatch(addProductLoading(formData));
      setFormData(initialFormData);
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="dashboard__add-product">
      <h2 className="dashboard__content-title">Add Product</h2>
      <form className="dashboard__add-product-form" onSubmit={handleSubmit}>
        <div className="dashboard__add-product-form--left">
          <div className="dashboard__card dashboard__add-product-card shadow-sm">
            <DashboardFormTextInput
              label="Name"
              type="text"
              required
              onChange={handleInputChange}
              name="name"
              value={name}
            />
            <DashboardFormQuillInput
              label="Description"
              onChange={handleQuillInputChange}
              value={description}
            />
          </div>
          <div className="dashboard__card dashboard__add-product-card shadow-sm">
            <DashboardFormTextInput
              label="Media"
              type="text"
              required
              onChange={handleInputChange}
              name="productImage"
              value={productImage}
            />
          </div>
          <div className="dashboard__card dashboard__add-product-card-pricing shadow-sm">
            <DashboardFormTextInput
              label="Pricing"
              type="number"
              required
              onChange={handleInputChange}
              name="price"
              value={price}
            />
            <DashboardFormTextInput
              label="Cost"
              type="number"
              required
              onChange={handleInputChange}
              name="cost"
              value={cost}
            />
          </div>
          <div className="dashboard__card dashboard__add-product-card shadow-sm">
            <DashboardFormTextInput
              label="Quantity in Stock"
              type="number"
              required
              onChange={handleInputChange}
              name="qtyInStock"
              value={qtyInStock}
            />
          </div>
        </div>
        <div className="dashboard__add-product-form--right">
          <div className="dashboard__card dashboard__add-product-card shadow-sm">
            <div className="dashboard__input-group">
              <span className="dashboard__label">
                Product Status
              </span>
              <div className="dashboard__add-product-card--status-options">
                <select
                  name="productLive"
                  value={productLive}
                  onChange={handleInputChange}
                >
                  <option value="">-- Select status --</option>
                  <option value="true">Available</option>
                  <option value="false">Draft</option>
                </select>
              </div>
            </div>
          </div>
          <div className="dashboard__card dashboard__add-product-card shadow-sm">
            <DashboardFormTextInput
              label="Category Name"
              type="text"
              required
              onChange={handleInputChange}
              name="categoryName"
              value={categoryName}
            />
            <DashboardFormTextInput
              label="Vendor"
              type="text"
              required
              onChange={handleInputChange}
              name="vendorName"
              value={vendorName}
            />
          </div>
        </div>
        <button className="dashboard__btn" type="submit">
          Save Product
        </button>
      </form>
    </div>
  );
};

export default AdminAddProduct;
