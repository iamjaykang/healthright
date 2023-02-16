import React from "react";
import { useSelector } from "react-redux";
import { selectProductsArray } from "../../../../app/stores/products/product.selector";

const AdminProducts = () => {
  const productsArray = useSelector(selectProductsArray);

  return (
    <div className="dashboard__products">
      <h2 className="dashboard__content-title products-title">Products</h2>
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
                <th className="dashboard__table-header stat-cell">Inventory</th>
              </tr>
            </thead>
            <tbody className="dashboard__table-body">
              {productsArray && productsArray.length !== 0 ? (
                productsArray.map((product) => (
                  <tr className="dashboard__table-row">
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
                      <span className="dashboard__table-cell-status dashboard__table-cell-status--available">
                        Available
                      </span>
                    </td>
                    <td className="dashboard__table-cell">
                      <span className="dashboard__table-cell-category">
                        Category 1
                      </span>
                    </td>
                    <td className="dashboard__table-cell">
                      <span className="dashboard__table-cell-vendor">
                        {product.vendor}
                      </span>
                    </td>
                    <td className="dashboard__table-cell stat-cell">
                      <span className="dashboard__table-cell-inventory">5</span>
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
