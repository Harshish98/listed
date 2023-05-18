import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "./DashWave.css";

function DashWave() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
      .then((response) => response.json())
      .then((apiData) => {
        setData(apiData);
      })
      .catch((error) => console.log(error));
  }, []);

  const labels = Object.keys(data?.cases || {});
  const cases = Object.values(data?.cases || {});

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Total Cases",
        data: cases,
        borderColor: "rgba(255, 99, 132, 1)",
        fill: false,
      },
    ],
  };

  return (
    <div className="line-graph">
      <h1>COVID-19 Cases Worldwide</h1>
      <div>{data ? <Line data={chartData} /> : "Loading data..."}</div>
    </div>
  );
}

export default DashWave;
