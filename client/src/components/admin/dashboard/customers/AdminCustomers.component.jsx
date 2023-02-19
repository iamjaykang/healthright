import React from "react";
import { Link } from "react-router-dom";

const AdminCustomers = () => {

  return (
    <div className="dashboard__customers">
      <div className="dashboard__customers-header">
        <h2 className="dashboard__content-title products-title">Customers</h2>
        <div className="dashboard__customers-btn-container">
          <Link
            to="/admin/dashboard/customers/add"
            className="dashboard__btn"
          >
            Add Customer
          </Link>
        </div>
      </div>
      <div className="dashboard__card shadow-sm">
        <div className="dashboard__customers-card-body">
          <div className="dashboard__table-container">
            <table className="dashboard__table">
              <thead className="dashboard__table-head">
                <tr>
                  <th className="dashboard__table-header customer-cell">Name</th>
                  <th className="dashboard__table-header stat-cell">Order(s)</th>
                  <th className="dashboard__table-header stat-cell">Amount Spent</th>
                </tr>
              </thead>
              <tbody className="dashboard__table-body">
                    <tr className="dashboard__table-row">
                      <td className="dashboard__table-cell customer-cell">
                        Jay Kang
                      </td>
                      <td className="dashboard__table-cell stat-cell">
                        1 Order(s)
                      </td>
                      <td className="dashboard__table-cell stat-cell">
                        $25.00 Spent
                      </td>
                    </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCustomers;
