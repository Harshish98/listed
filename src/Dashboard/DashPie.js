import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import "./DashPie.css";

function DashPie() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((apiData) => setData(apiData))
      .catch((error) => console.log(error));
  }, []);

  const countriesToDisplay = ["USA", "India", "Brazil"];

  const filteredData = data.filter((item) =>
    countriesToDisplay.includes(item.country)
  );
  const labels = filteredData.map((item) => item.country);
  const values = filteredData.map((item) => item.cases);

  const chartData = {
    labels,
    datasets: [
      {
        label: "My First Dataset",
        data: values,
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
        ],
      },
    ],
  };


  return (
    <div className="pie">
      <h1>COVID-19 Total Cases by Country (Top 3)</h1>
      <div>{data.length ? <Pie data={chartData} /> : "Loading data..."}</div>
    </div>
  );
}

export default DashPie;
