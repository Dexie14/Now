
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
        display:false,
      position: "top",
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
  elements: {
    line: {
      tension: 0.5,
      pointStyle:'star',
      pointBorderWidth:20,
    },
  },
};

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

export const data = {
  labels,
  datasets: [
    {
    //   label: "Dataset 1",
      data: [28, 29, 33, 36, 32, 32, 33],
      borderColor: "#8bbfed",
      backgroundColor: "#8bbfed",
      pointStyle:'rect',
      pointBorderWidth:10,
      
    },
    {
    //   label: "Dataset 2",
      data: [12, 11, 14, 18, 17, 13, 13],
      borderColor: "#696969",
      backgroundColor: "#696969",
      pointStyle:'rect',
      pointBorderWidth:10,
    },
  ],
};


function LineCharts() {
  return <Line options={options} data={data} />;
}

export default LineCharts;
