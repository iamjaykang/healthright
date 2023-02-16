import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ProductFormTextInput from "../../../../../app/common/productForm/ProductFormTextInput.common";
import { addProductLoading } from "../../../../../app/stores/products/product.action";

const initialFormData = {
  name: "",
  description: "",
  productImage: "",
  price: "",
  qtyInStock: "",
  categoryName: "",
  vendorName: "",
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
  } = formData;

  const resetFormData = () => {
    setFormData(initialFormData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: submit form data to create product

    try {
      dispatch(addProductLoading(formData));
      resetFormData();
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="dashboard__add-product">
      <h2 className="dashboard__add-product-title">Add Product</h2>
      <form className="dashboard__add-product-form" onSubmit={handleSubmit}>
        <div className="dashboard__card dashboard__add-product-card shadow-sm">
          <ProductFormTextInput
            label="Name"
            type="text"
            required
            onChange={handleInputChange}
            name="name"
            value={name}
          />
          <ProductFormTextInput
            label="Description"
            type="text"
            required
            onChange={handleInputChange}
            name="description"
            value={description}
          />
        </div>
        <ProductFormTextInput
          label="Product Image"
          type="text"
          required
          onChange={handleInputChange}
          name="productImage"
          value={productImage}
        />
        <ProductFormTextInput
          label="Price"
          type="text"
          required
          onChange={handleInputChange}
          name="price"
          value={price}
        />
        <ProductFormTextInput
          label="Quantity in Stock"
          type="number"
          required
          onChange={handleInputChange}
          name="qtyInStock"
          value={qtyInStock}
        />
        <ProductFormTextInput
          label="Category Name"
          type="text"
          required
          onChange={handleInputChange}
          name="categoryName"
          value={categoryName}
        />
        <ProductFormTextInput
          label="Vendor"
          type="text"
          required
          onChange={handleInputChange}
          name="vendorName"
          value={vendorName}
        />
        <button className="dashboard__add-product-submit" type="submit">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AdminAddProduct;
