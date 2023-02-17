import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProductsAdminLoading } from "../../../../app/stores/products/product.action";
import {
  selectAdminProductsArray,
  selectProductsArray,
} from "../../../../app/stores/products/product.selector";

const AdminProducts = () => {
  const adminProductsArray = useSelector(selectAdminProductsArray);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsAdminLoading());
  }, [dispatch]);

  return (
    <div className="dashboard__products">
      <div className="dashboard__products-header">
        <h2 className="dashboard__content-title products-title">Products</h2>
        <div className="dashboard__products-btn-container">
          <Link
            to="/admin/dashboard/products/add"
            className="dashboard__add-products-btn"
          >
            Add Product
          </Link>
        </div>
      </div>
      <div className="dashboard__card shadow-sm">
        <div className="dashboard__products-card-body">
          <div className="dashboard__table-container">
            <table className="dashboard__table">
              <thead className="dashboard__table-head">
                <tr>
                  <th className="dashboard__table-header stat-cell">ID</th>
                  <th className="dashboard__table-header">Product</th>
                  <th className="dashboard__table-header">Status</th>
                  <th className="dashboard__table-header">Category</th>
                  <th className="dashboard__table-header">Vendor</th>
                  <th className="dashboard__table-header text-center">
                    Inventory
                  </th>
                </tr>
              </thead>
              <tbody className="dashboard__table-body">
                {adminProductsArray && adminProductsArray.length !== 0 ? (
                  adminProductsArray.map((product) => (
                    <tr key={product.id} className="dashboard__table-row">
                      <td className="dashboard__table-cell stat-cell">
                        {product.id}
                      </td>
                      <td className="dashboard__table-cell product-cell">
                        <img
                          className="dashboard__product-image"
                          src={product.productImage}
                          alt="Product 1"
                        />
                        <span className="dashboard__product-name">
                          {product.name}
                        </span>
                      </td>
                      <td className="dashboard__table-cell">
                        <span
                          className={`dashboard__table-cell status-cell${
                            product.productLive
                              ? "--available"
                              : "--unavailable"
                          }`}
                        >
                          {product.productLive ? "Available" : "Draft"}
                        </span>
                      </td>
                      <td className="dashboard__table-cell">
                        <span className="dashboard__table-cell-category">
                          {product.category.categoryName}
                        </span>
                      </td>
                      <td className="dashboard__table-cell">
                        <span className="dashboard__table-cell-vendor">
                          {product.vendor.vendorName}
                        </span>
                      </td>
                      <td className="dashboard__table-cell text-center">
                        <span className="dashboard__table-cell-inventory">
                          {product.qtyInStock}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr className="dashboard__table-row">
                    <td
                      className="dashboard__table-cell"
                      colSpan="6"
                      style={{ textAlign: "center" }}
                    >
                      No Product(s) Available...
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProducts;
