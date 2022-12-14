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
    label: false,
    datasets: [
      {
        label: "# of Votes",
        // radius: 40,
        data: [percent, 100 - percent],
        backgroundColor: ["#F9896B", "#fff"],

        // borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        // animation.animateScale: ,
        borderJoinStyle: "bevel",
        cutout: 35,
        // circumference: 360,
        // clip: { left: 5, top: false, right: -2, bottom: 0 },
        borderRadius: 1,
        // spacing: "0.1px",
        weight: 1,
        // borderWidth: 3,
        borderAlign: "inner",
      },
    ],
  };
  return <Doughnut data={data} />;
};

export const LineChart = ({ datas, label, users_counts }) => {
  console.log(label);
  console.log(datas);
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
  const labels = label;
  const data = {
    labels: labels,
    datasets: [
      {
        label: "users",
        data: datas,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
      {
        label: "vendor",
        data: users_counts,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };
  return <Line data={data} />;
};

export const AreaChart = ({ job_months, job_counts }) => {
  const labels = job_months;

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Jobs",
        data: job_counts,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return <Line data={data} />;
};
