import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import DashboardFormQuillInput from "../../../../../app/common/dashboardForm/DashboardFormQuillInput.common";
import DashboardFormTextInput from "../../../../../app/common/dashboardForm/DashboardFormTextInput.common";
import Spinner from "../../../../../app/common/spinner/Spinner.common";
import {
  deleteProductLoading,
  fetchProductAdminLoading,
  updateProductLoading,
} from "../../../../../app/stores/products/product.action";
import {
  selectAdminProduct,
  selectProductsIsLoading,
  selectProductsSuccess,
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

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { productId } = useParams();

  const adminProduct = useSelector(selectAdminProduct);

  const productActionSuccess = useSelector(selectProductsSuccess);

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

  const handleDelete = () => {
    try {
      dispatch(deleteProductLoading(productId));
      if (productActionSuccess) {
        navigate("/admin/dashboard/products");
      }
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    dispatch(fetchProductAdminLoading(productId));
  }, [dispatch, productId]);

  if (adminProductIsLoading) {
    return <Spinner />;
  }

  return (
    <div className="dashboard__add-product">
      <div className="dashboard__products-header">
        <h2 className="dashboard__content-title">Edit Product</h2>
        <div className="dashboard__btn-container">
          <button
            onClick={handleDelete}
            className="dashboard__btn shadow-sm"
          >
            Delete
          </button>
        </div>
      </div>
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
        <div className="dashboard__btns-container">
          <button
            className="dashboard__btn--discard shadow-sm"
            type="button"
            disabled={!isFormChanged}
            onClick={handleReset}
          >
            Discard
          </button>
          <button
            className="dashboard__btn shadow-sm"
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
