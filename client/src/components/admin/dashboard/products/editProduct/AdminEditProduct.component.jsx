import React, { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductFormQuillInput from "../../../../../app/common/productForm/ProductFormQuillInput.common";
import ProductFormTextInput from "../../../../../app/common/productForm/ProductFormTextInput.common";
import { fetchProductAdminLoading } from "../../../../../app/stores/products/product.action";
import { selectAdminProduct } from "../../../../../app/stores/products/product.selector";

const AdminEditProduct = () => {

  const dispatch = useDispatch();

  const { productId } = useParams();

  const adminProduct = useSelector(selectAdminProduct);

  const initialFormData = {
    name: adminProduct?.name ?? "",
    description: adminProduct?.description ?? "",
    productImage: adminProduct?.productImage ?? "",
    price: adminProduct?.price ?? "",
    qtyInStock: adminProduct?.qtyInStock ?? "",
    categoryName: adminProduct?.category.categoryName ?? "",
    vendorName: adminProduct?.vendor.vendorName ?? "",
    cost: adminProduct?.cost ?? "",
    productLive: adminProduct?.productLive ?? false,
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    dispatch(fetchProductAdminLoading(productId));
  }, [dispatch]);

  return (
    <div className="dashboard__add-product">
      <h2 className="dashboard__content-title">Edit Product</h2>
      <form className="dashboard__add-product-form" onSubmit={handleSubmit}>
        <div className="dashboard__add-product-form--left">
          <div className="dashboard__card dashboard__add-product-card shadow-sm">
            <ProductFormTextInput
              label="Name"
              type="text"
              required
              onChange={handleInputChange}
              name="name"
              value={name}
            />
            <ProductFormQuillInput
              label="Description"
              onChange={(value) =>
                setFormData({ ...formData, description: value })
              }
              value={description}
            />
          </div>
          <div className="dashboard__card dashboard__add-product-card shadow-sm">
            <ProductFormTextInput
              label="Media"
              type="text"
              required
              onChange={handleInputChange}
              name="productImage"
              value={productImage}
            />
          </div>
          <div className="dashboard__card dashboard__add-product-card-pricing shadow-sm">
            <ProductFormTextInput
              label="Pricing"
              type="number"
              required
              onChange={handleInputChange}
              name="price"
              value={price}
            />
            <ProductFormTextInput
              label="Cost"
              type="number"
              required
              onChange={handleInputChange}
              name="cost"
              value={cost}
            />
          </div>
          <div className="dashboard__card dashboard__add-product-card shadow-sm">
            <ProductFormTextInput
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
            <div className="dashboard__add-product-input-group">
              <span className="dashboard__add-product-label">
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
          </div>
        </div>
        <button className="dashboard__add-product-btn" type="submit">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AdminEditProduct;
