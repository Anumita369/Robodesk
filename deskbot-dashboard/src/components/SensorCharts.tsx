import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement } from "chart.js";
import type { RobotData } from "../services/api";

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement);

interface Props {
  history: RobotData[];
}

const SensorCharts: React.FC<Props> = ({ history }) => {
  const data = {
    labels: history.map((item) => new Date(item.timestamp).toLocaleTimeString()),
    datasets: [
      {
        label: "Temperature",
        data: history.map((item) => item.temp),
        borderColor: "red",
        fill: false,
      },
      {
        label: "Humidity",
        data: history.map((item) => item.humidity),
        borderColor: "blue",
        fill: false,
      },
    ],
  };

  return <Line data={data} />;
};

export default SensorCharts;
