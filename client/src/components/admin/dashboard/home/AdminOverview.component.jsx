import React from "react";
import BarChart from "./charts/BarChart.component";
import LineChart from "./charts/LineChart.component";

const AdminOverview = () => {
  return (
    <div className="dashboard__overview">
      <h2 className="dashboard__content-title">Overview</h2>
      <div className="dashboard__stats-grid">
          <div className="dashboard__card dashboard__stats-card shadow-sm">
            <div className="dashboard__stats-card-body">
              <h4 className="dashboard__stats-card-text">Total Sales</h4>
              <div className="dashboard__stats-card-figure">$12,628</div>
              <div className="dashboard__stats-card-meta text-success">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  className="bi bi-arrow-up"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
                  />
                </svg>
                20%
              </div>
            </div>
          </div>
          <div className="dashboard__card dashboard__stats-card shadow-sm">
            <div className="dashboard__stats-card-body">
              <h4 className="dashboard__stats-card-text">Expenses</h4>
              <div className="dashboard__stats-card-figure">$2,250</div>
              <div className="dashboard__stats-card-meta text-success">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  className="bi bi-arrow-down"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                  />
                </svg>
                5%
              </div>
            </div>
          </div>
          <div className="dashboard__card dashboard__stats-card shadow-sm">
            <div className="dashboard__stats-card-body">
              <h4 className="dashboard__stats-card-text">Pending Orders</h4>
              <div className="dashboard__stats-card-figure">23</div>
              <div className="dashboard__stats-card-meta">Open</div>
            </div>
          </div>
          <div className="dashboard__card dashboard__stats-card shadow-sm">
            <div className="dashboard__stats-card-body">
              <h4 className="dashboard__stats-card-text">Fulfilled Orders</h4>
              <div className="dashboard__stats-card-figure">6</div>
              <div className="dashboard__stats-card-meta">New</div>
            </div>
          </div>
        </div>
      <div className="dashboard__charts-grid">
          <div className="dashboard__card shadow-sm">
            <div className="dashboard__card-body">
              <LineChart />
            </div>
        </div>
          <div className="dashboard__card shadow-sm">
            <div className="dashboard__card-header">
              <div className="dashboard__card-body">
                <BarChart />
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOverview;
