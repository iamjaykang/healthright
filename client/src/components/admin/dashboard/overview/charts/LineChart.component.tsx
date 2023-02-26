import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, // x axis
  LinearScale, // y axis
  PointElement,
  Legend,
  Tooltip,
  Title,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale, // x axis
  LinearScale, // y axis
  PointElement,
  Legend,
  Tooltip,
  Title
);

const LineChart = () => {
  const chartColors = {
    green: "#75c181",
    blue: "#5b99ea",
    gray: "#a9b5c9",
    text: "#252930",
    border: "#e7e9ed",
  };

  const randomDataPoint = function () {
    return Math.round(Math.random() * 10000);
  };

  const data = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
    datasets: [
      {
        label: "Current week",
        fill: false,
        backgroundColor: chartColors.green,
        borderColor: chartColors.green,
        data: [
          randomDataPoint(),
          randomDataPoint(),
          randomDataPoint(),
          randomDataPoint(),
          randomDataPoint(),
          randomDataPoint(),
          randomDataPoint(),
        ],
        tension: 0.4,
      },
      {
        label: "Previous week",
        borderDash: [3, 5],
        backgroundColor: chartColors.gray,
        borderColor: chartColors.gray,
        data: [
          randomDataPoint(),
          randomDataPoint(),
          randomDataPoint(),
          randomDataPoint(),
          randomDataPoint(),
          randomDataPoint(),
          randomDataPoint(),
        ],
        tension: 0.4,
      },
    ],
  };

  const options = {
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
