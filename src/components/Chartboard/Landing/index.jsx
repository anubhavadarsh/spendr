import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Landing = () => {
  let bills = useSelector((state) => state.bills.billsList);
  bills = bills.slice().sort((a, b) => b.date - a.date);
  const labels = bills.map((bill) => bill.date).reverse();
  const amount = bills.map((bill) => bill.amt).reverse();
  const colorArray = ["#39c2f5"];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "$ Amount Spent ",
        data: amount,
        backgroundColor: colorArray[0],
        borderColor: colorArray[0],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };

  return <Line options={options} data={data} />;
};

export default Landing;
