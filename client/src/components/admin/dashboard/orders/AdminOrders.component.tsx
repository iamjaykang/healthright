import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAllOrdersLoading } from "../../../../app/stores/orders/order.action";
import { selectOrdersArray } from "../../../../app/stores/orders/order.selector";

const AdminOrders = () => {
  const dispatch = useDispatch();

  const ordersArray = useSelector(selectOrdersArray);

  useEffect(() => {
    dispatch(fetchAllOrdersLoading());
  }, [dispatch]);

  return (
    <div className="dashboard__page">
      <div className="dashboard__page-header">
        <h2 className="dashboard__page-title">Orders</h2>
        <div className="dashboard__btn-container">
          <Link to="/admin/dashboard/orders/add" className="dashboard__btn">
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
                {ordersArray &&
                  ordersArray.map((order) => (
                    <tr key={order.id} className="dashboard__table-row">
                      <td className="dashboard__table-cell">
                        <Link to={`/admin/dashboard/orders/edit/${order.id}`}>
                          #{order.id}
                        </Link>
                      </td>
                      <td className="dashboard__table-cell customer-cell">
                        {order.user.firstName} {order.user.lastName}
                      </td>
                      <td
                        className={`dashboard__table-cell status-${order.orderStatus.status.toLowerCase()}`}
                      >
                        {order.orderStatus.status}
                      </td>
                      <td className="dashboard__table-cell text-right">
                        ${order.orderTotal}
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

export default AdminOrders;
