import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductFormQuillInput from "../../../../../app/common/productForm/ProductFormQuillInput.common";
import ProductFormTextInput from "../../../../../app/common/productForm/ProductFormTextInput.common";
import Spinner from "../../../../../app/common/spinner/Spinner.common";
import {
  fetchProductAdminLoading,
  updateProductLoading,
} from "../../../../../app/stores/products/product.action";
import {
  selectAdminProduct,
  selectProductsIsLoading,
} from "../../../../../app/stores/products/product.selector";

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

const AdminEditProduct = () => {
  const [isFormChanged, setIsFormChanged] = useState(false);

  const dispatch = useDispatch();

  const { productId } = useParams();

  const adminProduct = useSelector(selectAdminProduct);

  useEffect(() => {
    dispatch(fetchProductAdminLoading(productId));
  }, [dispatch, productId]);

  const adminProductIsLoading = useSelector(selectProductsIsLoading);

  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    if (adminProduct) {
      setFormData({
        name: adminProduct.name,
        description: adminProduct.description,
        productImage: adminProduct.productImage,
        price: adminProduct.price,
        qtyInStock: adminProduct.qtyInStock,
        categoryName: adminProduct.category.categoryName,
        vendorName: adminProduct.vendor.vendorName,
        cost: adminProduct.cost,
        productLive: adminProduct.productLive,
      });
    }
  }, [adminProduct]);

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
    setIsFormChanged(true);
  };

  const handleQuillInputChange = (value) => {
    setFormData({ ...formData, description: value });
    setIsFormChanged(true);
  };
  const handleReset = () => {
    dispatch(fetchProductAdminLoading(productId));
    setIsFormChanged(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      dispatch(updateProductLoading(productId, formData));
    } catch (error) {
      throw error;
    }
  };

  if (adminProductIsLoading) {
    return <Spinner />;
  }

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
              onChange={handleQuillInputChange}
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
        <div className="dashboard__products-btns-container">
          <button
            className="dashboard__discard-product-btn shadow-sm"
            type="button"
            disabled={!isFormChanged}
            onClick={handleReset}
          >
            Discard
          </button>
          <button
            className="dashboard__save-product-btn shadow-sm"
            type="submit"
            disabled={!isFormChanged}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminEditProduct;
