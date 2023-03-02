import React, { ChangeEvent, FormEvent, useState } from "react";
import "react-quill/dist/quill.snow.css";
import { useDispatch } from "react-redux";
import DashboardFormQuillInput from "../../../../../app/common/dashboardForm/DashboardFormQuillInput.common";
import DashboardFormInput from "../../../../../app/common/dashboardForm/DashboardFormInput.common";
import { addProductLoading } from "../../../../../app/stores/products/product.action";
import DashboardFormSelect from "../../../../../app/common/dashboardForm/DashboardFormSelect.common";

const initialFormData = {
  name: "",
  description: "",
  productImage: "",
  price: 0.0,
  qtyInStock: 0,
  categoryName: "",
  vendorName: "",
  cost: 0.0,
  productLive: 0,
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

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    const boolValue = value === "1" ? true : false;
    setFormData({ ...formData, [name]: boolValue });
  };

  const handleQuillInputChange = (value: string) => {
    setFormData({ ...formData, description: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      dispatch(addProductLoading(formData));
      setFormData(initialFormData);
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="dashboard__page">
      <h2 className="dashboard__page-title">Add Product</h2>
      <form className="dashboard__form--product" onSubmit={handleSubmit}>
        <div className="dashboard__form-container--product-left">
          <div className="dashboard__card--product shadow-sm">
            <DashboardFormInput
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
          <div className="dashboard__card--product shadow-sm">
            <DashboardFormInput
              label="Media"
              type="text"
              required
              onChange={handleInputChange}
              name="productImage"
              value={productImage}
            />
          </div>
          <div className="dashboard__card--product-pricing shadow-sm">
            <DashboardFormInput
              label="Pricing"
              type="number"
              required
              onChange={handleInputChange}
              name="price"
              value={price}
            />
            <DashboardFormInput
              label="Cost"
              type="number"
              required
              onChange={handleInputChange}
              name="cost"
              value={cost}
            />
          </div>
          <div className="dashboard__card--product shadow-sm">
            <DashboardFormInput
              label="Quantity in Stock"
              type="number"
              required
              onChange={handleInputChange}
              name="qtyInStock"
              value={qtyInStock}
            />
          </div>
        </div>
        <div className="dashboard__form-container--product-right">
          <div className="dashboard__card--product shadow-sm">
            <DashboardFormSelect
              label="Product Status"
              name="productLive"
              value={productLive}
              onChange={handleSelectChange}
              options={[
                { value: "0", label: "Draft" },
                { value: "1", label: "Available" },
              ]}
            />
          </div>
          <div className="dashboard__card--product shadow-sm">
            <DashboardFormInput
              label="Category Name"
              type="text"
              required
              onChange={handleInputChange}
              name="categoryName"
              value={categoryName}
            />
            <DashboardFormInput
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
