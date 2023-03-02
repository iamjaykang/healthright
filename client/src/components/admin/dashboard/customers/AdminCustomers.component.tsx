import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAllCustomersLoading } from "../../../../app/stores/customers/customer.action";
import { selectCustomersArray } from "../../../../app/stores/customers/customer.selector";

const AdminCustomers = () => {
  const dispatch = useDispatch();

  const customersArray = useSelector(selectCustomersArray);

  useEffect(() => {
    dispatch(fetchAllCustomersLoading());
  }, [dispatch]);

  return (
    <div className="dashboard__page">
      <div className="dashboard__page-header">
        <h2 className="dashboard__page-title">Customers</h2>
        <div className="dashboard__btn-container">
          <Link to="/admin/dashboard/customer/add" className="dashboard__btn">
            Add Customer
          </Link>
        </div>
      </div>
      <div className="dashboard__card shadow-sm">
        <div className="dashboard__card-body">
          <div className="dashboard__table-container">
            <table className="dashboard__table">
              <thead className="dashboard__table-head">
                <tr>
                  <th className="dashboard__table-header">
                    Customer
                  </th>
                  <th className="dashboard__table-header text-right">
                    Order(s)
                  </th>
                  <th className="dashboard__table-header text-right">
                    Amount Spent
                  </th>
                </tr>
              </thead>
              <tbody className="dashboard__table-body">
                {customersArray &&
                  customersArray.map((customer) => (
                    <tr key={customer.id} className="dashboard__table-row">
                      <td className="dashboard__table-cell--customer">
                        <Link
                          to={`/admin/dashboard/customer/edit/${customer.id}`}
                        >
                          <span className="dashboard__cell-name">
                            {customer.firstName ?? ""} {customer.lastName ?? ""}
                          </span>
                          <span className="dashboard__cell--address">
                            {customer.userAddresses &&
                              customer.userAddresses.length > 0 &&
                              `${customer.userAddresses[0].address.city}, ${customer.userAddresses[0].address.country.countryName}`}
                          </span>
                        </Link>
                      </td>
                      <td className="dashboard__table-cell text-right">
                        1 Order(s)
                      </td>
                      <td className="dashboard__table-cell text-right">
                        $25.00 Spent
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCustomers;
