import React from "react";
import ReactApexChart from "react-apexcharts";

const TimeSeriesChart: React.FC = () => {
  const options = {
    chart: { id: "visitors-chart" },
    xaxis: { categories: ["2024-01-01", "2024-01-02", "2024-01-03"] },
  };

  const series = [
    {
      name: "Visitors",
      data: [30, 40, 35], // Dummy data
    },
  ];

  return <ReactApexChart options={options} series={series} type="line" height={350} />;
};

export default TimeSeriesChart;
