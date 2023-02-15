import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale, // x axis
  LinearScale, // y axis
  Legend,
  Tooltip,
  Title
} from "chart.js";

ChartJS.register(
  BarElement,
  CategoryScale, // x axis
  LinearScale, // y axis
  Legend,
  Tooltip,
  Title
);

const BarChart = () => {
  const chartColors = {
    green: "#75c181",
    blue: "#5b99ea",
    gray: "#a9b5c9",
    text: "#252930",
    border: "#e7e9ed",
  };
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Orders",
        backgroundColor: chartColors.green,
        borderColor: chartColors.green,
        borderWidth: 1,
        maxBarThickness: 16,
        data: [23, 45, 76, 75, 62, 37, 83],
      },
    ],
  };

  const options = {
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
