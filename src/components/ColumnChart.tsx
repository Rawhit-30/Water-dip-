import React from "react";
import ReactApexChart from "react-apexcharts";

const ColumnChart: React.FC = () => {
  const options = {
    chart: { id: "visitors-country-chart" },
    xaxis: { categories: ["USA", "UK", "Germany"] },
  };

  const series = [
    {
      name: "Visitors",
      data: [100, 200, 150], // Dummy data
    },
  ];

  return <ReactApexChart options={options} series={series} type="bar" height={350} />;
};

export default ColumnChart;
