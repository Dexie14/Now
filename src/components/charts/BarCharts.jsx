import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: false,
      text: "Transaction History ",
      color: "#252525",
    },
  },
};
const labels = ["", "", "", "", "", "", "Aug", "Sept", "Oct", "Nov"];

export const data = {
  labels,
  datasets: [
    {
      label: 'Net Profit',
      data: [40, 50, 50, 45, 40, 50, 50, 45, 0, 50],
      backgroundColor: "#028ffb",
      barThickness: 6,
    },
    {
      label: 'Revenue',
      data: [70, 80, 110, 100, 70, 80, 130, 100, 0, 100],
      backgroundColor: "#00e296",
      barThickness: 6,
    },
    {
      label: 'Free Cash Flow',
      data: [30, 35, 32, 25, 30, 40, 32, 28, 0, 28],
      backgroundColor: "#feb018",
      barThickness: 6,
    },
  ],
};

const BarCharts = () => {
  return <Bar options={options} data={data} />;
};

export default BarCharts;
