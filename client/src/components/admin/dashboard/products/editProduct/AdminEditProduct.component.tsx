import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import DashboardFormQuillInput from "../../../../../app/common/dashboardForm/DashboardFormQuillInput.common";
import DashboardFormInput from "../../../../../app/common/dashboardForm/DashboardFormInput.common";
import Spinner from "../../../../../app/common/spinner/Spinner.common";
import {
  deleteProductLoading,
  fetchProductAdminLoading,
  updateProductLoading,
} from "../../../../../app/stores/products/product.action";
import {
  selectProduct,
  selectProductsIsLoading,
  selectProductsSuccess,
} from "../../../../../app/stores/products/product.selector";
import { AdminProduct } from "../../../../../app/models/product.model";
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

const AdminEditProduct = () => {
  const [isFormChanged, setIsFormChanged] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { productId } = useParams();

  const adminProduct = useSelector(selectProduct) as AdminProduct;

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
        productLive: adminProduct.productLive ? 1 : 0,
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

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setIsFormChanged(true);
  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    const boolValue = value === "1" ? true : false;
    setFormData({ ...formData, [name]: boolValue });
  };

  const handleQuillInputChange = (value: string) => {
    setFormData({ ...formData, description: value });
    setIsFormChanged(true);
  };
  const handleReset = () => {
    if (productId) {
      const id = parseInt(productId, 10);
      dispatch(fetchProductAdminLoading(id));
    }
    setIsFormChanged(false);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (productId) {
        const id = parseInt(productId, 10);
        dispatch(updateProductLoading(id, formData));
      }
    } catch (error) {
      throw error;
    }
  };

  const handleDelete = () => {
    try {
      if (productId) {
        const id = parseInt(productId, 10);
        dispatch(deleteProductLoading(id));
        if (productActionSuccess) {
          navigate("/admin/dashboard/products");
        }
      }
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    if (productId) {
      const id = parseInt(productId, 10);
      dispatch(fetchProductAdminLoading(id));
    }
  }, [dispatch, productId]);

  if (adminProductIsLoading) {
    return <Spinner />;
  }

  return (
    <div className="dashboard__page">
      <div className="dashboard__page-header">
        <h2 className="dashboard__page-title">Edit Product</h2>
        <div className="dashboard__btn-container">
          <button onClick={handleDelete} className="dashboard__btn shadow-sm">
            Delete
          </button>
        </div>
      </div>
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
