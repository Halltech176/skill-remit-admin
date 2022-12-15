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

export const LineChart = ({ label, users_data, vendors_data }) => {
  console.log(label);
  console.log(users_data);
  console.log(vendors_data);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };

  const data = {
    labels: label,

    datasets: [
      {
        label: false,
        data: users_data,
        fill: false,
        borderColor: "#5041BC",
        lineTension: 0.8,
        color: "#5041BC",
      },
      {
        label: "vendor",
        data: vendors_data,
        fill: false,
        borderColor: "#43BE83",
        lineTension: 0.5,
        color: "#5041BC",
      },
    ],
  };
  return <Line data={data} options={options} />;
};

export const AreaChart = ({ job_months, job_counts }) => {
  console.log(job_counts, job_months);
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };
  const data = {
    labels: job_months,
    // type: "line",
    datasets: [
      {
        // fillColor: "pink",
        label: "Jobs",
        data: job_counts,
        lineTension: 0.4,
        // data: job_counts,
        // borderColor: "rgb(53, 162, 235)",
        borderColor: "#3D29D0",
        // backgroundColor: "red",
        color: "#5041BC",
      },
    ],
  };

  return (
    <div>
      {" "}
      <Line data={data} options={options} />
    </div>
  );
};
