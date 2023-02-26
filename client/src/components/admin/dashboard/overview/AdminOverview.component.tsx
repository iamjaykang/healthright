import React from "react";
import BarChart from "./charts/BarChart.component";
import LineChart from "./charts/LineChart.component";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

const AdminOverview = () => {
  return (
    <div className="dashboard__page">
      <h2 className="dashboard__content-title">Overview</h2>
      <div className="dashboard__stats-grid">
        <div className="dashboard__stats-card shadow-sm">
          <div className="dashboard__stats-card-body">
            <h4 className="dashboard__stats-card-text">Total Sales</h4>
            <div className="dashboard__stats-card-figure">$12,628</div>
            <div className="dashboard__stats-card-meta text-success">
              <AiOutlineArrowUp
                style={{ width: "1rem", height: "1rem"}}
              />
              20%
            </div>
          </div>
        </div>
        <div className="dashboard__stats-card shadow-sm">
          <div className="dashboard__stats-card-body">
            <h4 className="dashboard__stats-card-text">Expenses</h4>
            <div className="dashboard__stats-card-figure">$2,250</div>
            <div className="dashboard__stats-card-meta text-success">
              <AiOutlineArrowDown
                style={{ width: "1rem", height: "1rem"}}
              />
              5%
            </div>
          </div>
        </div>
        <div className="dashboard__stats-card shadow-sm">
          <div className="dashboard__stats-card-body">
            <h4 className="dashboard__stats-card-text">Pending Orders</h4>
            <div className="dashboard__stats-card-figure">23</div>
            <div className="dashboard__stats-card-meta">Open</div>
          </div>
        </div>
        <div className="dashboard__stats-card shadow-sm">
          <div className="dashboard__stats-card-body">
            <h4 className="dashboard__stats-card-text">Fulfilled Orders</h4>
            <div className="dashboard__stats-card-figure">6</div>
            <div className="dashboard__stats-card-meta">New</div>
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
            <div className="dashboard__card-body">
              <BarChart />
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard__grid">
        <div className="dashboard__card shadow-sm">
          <div className="dashboard__card-title dashboard__sales-card">
            Sales Channel
          </div>
          <div className="dashboard__card-body">
            <div className="dashboard__sales-table">
              <table className="dashboard__table">
                <thead>
                  <tr>
                    <th className="dashboard__table-header">Source</th>
                    <th className="dashboard__table-header stat-cell">Views</th>
                    <th className="dashboard__table-header stat-cell">Today</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="dashboard__table-cell meta-cell">
                      google.com
                    </td>
                    <td className="dashboard__table-cell stat-cell">1000</td>
                    <td className="dashboard__table-cell stat-cell text-success">
                      +10%
                    </td>
                  </tr>
                  <tr>
                    <td className="dashboard__table-cell meta-cell">
                      facebook.com
                    </td>
                    <td className="dashboard__table-cell stat-cell">800</td>
                    <td className="dashboard__table-cell stat-cell text-danger">
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
            <div className="dashboard__product-table">
              <table className="dashboard__table">
                <thead>
                  <tr>
                    <th className="dashboard__table-header">Product</th>
                    <th className="dashboard__table-header stat-cell">Sold</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="dashboard__table-cell product-cell">
                      <img
                        src="https://via.placeholder.com/50x50"
                        alt="Product 1"
                        className="dashboard__product-image"
                      />
                      <h3 className="dashboard__product-name">Product 1</h3>
                    </td>
                    <td className="dashboard__table-cell stat-cell">50</td>
                  </tr>
                  <tr>
                    <td className="dashboard__table-cell product-cell">
                      <img
                        src="https://via.placeholder.com/50x50"
                        alt="Product 2"
                        className="dashboard__product-image"
                      />
                      <h3 className="dashboard__product-name">Product 2</h3>
                    </td>
                    <td className="dashboard__table-cell stat-cell">60</td>
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
