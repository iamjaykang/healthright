import React from "react";
import { Link } from "react-router-dom";

const AdminOrders = () => {
  return (
    <div className="dashboard__page">
      <div className="dashboard__page-header">
        <h2 className="dashboard__page-title">Orders</h2>
        <div className="dashboard__btn-container">
          <Link to="/admin/dashboard/order/add" className="dashboard__btn">
            Add Order
          </Link>
        </div>
      </div>
      <div className="dashboard__card shadow-sm">
        <div className="dashboard__card-body--order">
          <div className="dashboard__table-container">
            <table className="dashboard__table">
              <thead className="dashboard__table-head">
                <tr>
                  <th className="dashboard__table-header">Order Number</th>
                  <th className="dashboard__table-header customer-cell">
                    Customer
                  </th>
                  <th className="dashboard__table-header">Status</th>
                  <th className="dashboard__table-header text-right">Total</th>
                </tr>
              </thead>
              <tbody className="dashboard__table-body">
                <tr className="dashboard__table-row">
                  <td className="dashboard__table-cell">
                    <Link to={`/admin/dashboard/order/edit/1`}>#1001</Link>
                  </td>
                  <td className="dashboard__table-cell customer-cell">
                    John Doe
                  </td>
                  <td className="dashboard__table-cell">Processing</td>
                  <td className="dashboard__table-cell text-right">$50.00</td>
                </tr>
                <tr className="dashboard__table-row">
                  <td className="dashboard__table-cell">
                    <Link to={`/admin/dashboard/order/edit/2`}>#1002</Link>
                  </td>
                  <td className="dashboard__table-cell">Jane Smith</td>
                  <td className="dashboard__table-cell">Shipped</td>
                  <td className="dashboard__table-cell text-right">$75.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOrders;
