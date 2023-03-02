import React from "react";
import BarChart from "./charts/BarChart.component";
import LineChart from "./charts/LineChart.component";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

const AdminOverview = () => {
  return (
    <div className="dashboard__page">
      <h2 className="dashboard__page-title">Overview</h2>
      <div className="dashboard__stats-grid">
        <div className="dashboard__card--stats shadow-sm">
          <div className="dashboard__card-body--stats">
            <h4 className="dashboard__card-title--stats">Total Sales</h4>
            <div className="dashboard__card-figure--stats">$12,628</div>
            <div className="dashboard__card-meta--stats text-success">
              <AiOutlineArrowUp
                style={{ width: "1rem", height: "1rem"}}
              />
              20%
            </div>
          </div>
        </div>
        <div className="dashboard__card--stats shadow-sm">
          <div className="dashboard__card-body--stats">
            <h4 className="dashboard__card-title--stats">Expenses</h4>
            <div className="dashboard__card-figure--stats">$2,250</div>
            <div className="dashboard__card-meta--stats text-success">
              <AiOutlineArrowDown
                style={{ width: "1rem", height: "1rem"}}
              />
              5%
            </div>
          </div>
        </div>
        <div className="dashboard__card--stats shadow-sm">
          <div className="dashboard__card-body--stats">
            <h4 className="dashboard__card-title--stats">Pending Orders</h4>
            <div className="dashboard__card-figure--stats">23</div>
            <div className="dashboard__card-meta--stats">Open</div>
          </div>
        </div>
        <div className="dashboard__card--stats shadow-sm">
          <div className="dashboard__card-body--stats">
            <h4 className="dashboard__card-title--stats">Fulfilled Orders</h4>
            <div className="dashboard__card-figure--stats">6</div>
            <div className="dashboard__card-meta--stats">New</div>
          </div>
        </div>
      </div>
      <div className="dashboard__charts-grid">
        <div className="dashboard__card shadow-sm">
          <div className="dashboard__card-title">Sales</div>
          <div className="dashboard__card-body">
            <LineChart />
          </div>
        </div>
        <div className="dashboard__card shadow-sm">
          <div className="dashboard__card-header">
            <div className="dashboard__card-title">Orders</div>
          </div>
            <div className="dashboard__card-body">
              <BarChart />
            </div>
        </div>
      </div>
      <div className="dashboard__grid">
        <div className="dashboard__card shadow-sm">
          <div className="dashboard__card-title">
            Sales Channel
          </div>
          <div className="dashboard__card-body">
            <div className="dashboard__table-container">
              <table className="dashboard__table">
                <thead>
                  <tr>
                    <th className="dashboard__table-header">Source</th>
                    <th className="dashboard__table-header text-right">Views</th>
                    <th className="dashboard__table-header text-right">Today</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="dashboard__table-cell">
                      google.com
                    </td>
                    <td className="dashboard__table-cell text-right">1000</td>
                    <td className="dashboard__table-cell text-right text-success">
                      +10%
                    </td>
                  </tr>
                  <tr>
                    <td className="dashboard__table-cell">
                      facebook.com
                    </td>
                    <td className="dashboard__table-cell text-right">800</td>
                    <td className="dashboard__table-cell text-right text-danger">
                      -5%
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="dashboard__card shadow-sm">
          <div className="dashboard__card-title">Top Selling Products</div>
          <div className="dashboard__card-body">
            <div className="dashboard__table-container">
              <table className="dashboard__table">
                <thead>
                  <tr>
                    <th className="dashboard__table-header">Product</th>
                    <th className="dashboard__table-header text-right">Sold</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="dashboard__table-cell--product">
                      <img
                        src="https://via.placeholder.com/50x50"
                        alt="Product 1"
                        className="dashboard__cell-image--product"
                      />
                      <h3 className="dashboard__cell-title--product">Product 1</h3>
                    </td>
                    <td className="dashboard__table-cell text-right">50</td>
                  </tr>
                  <tr>
                    <td className="dashboard__table-cell--product">
                      <img
                        src="https://via.placeholder.com/50x50"
                        alt="Product 2"
                        className="dashboard__cell-image--product"
                      />
                      <h3 className="dashboard__cell-title--product">Product 2</h3>
                    </td>
                    <td className="dashboard__table-cell text-right">60</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOverview;
