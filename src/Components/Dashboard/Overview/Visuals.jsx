import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut, Line } from "react-chartjs-2";
// Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export const DoughnutChart = ({ percent }) => {
  const data = {
    options: {
      legend: {
        display: false,
      },
      tooltips: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.yLabel;
          },
        },
      },
    },
    labels: ["orange", "Blue"],
    datasets: [
      {
        label: "# of Votes",
        radius: 20,
        data: [percent, 100 - percent],
        backgroundColor: ["#F9896B", "#fff"],
        // borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderJoinStyle: "round",
        borderRadius: 2,
        weight: 2,
        borderWidth: 0.1,
      },
    ],
  };
  return <Doughnut data={data} />;
};

export const LineChart = () => {
  // const options = {
  //   responsive: true,
  //   interaction: {
  //     mode: "index",
  //     intersect: false,
  //   },
  //   stacked: false,
  //   plugins: {
  //     title: {
  //       display: true,
  //       text: "Chart.js Line Chart - Multi Axis",
  //     },
  //   },
  //   scales: {
  //     y: {
  //       type: "linear",
  //       display: true,
  //       position: "left",
  //     },
  //     y1: {
  //       type: "linear",
  //       display: true,
  //       position: "right",
  //       grid: {
  //         drawOnChartArea: false,
  //       },
  //     },
  //   },
  // };
  const labels = ["Jan", "Feb", "March", "April", "May", "June", "July"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };
  return <Line data={data} />;
};

export const AreaChart = () => {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Dataset 2",
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return <Line data={data} />;
};
