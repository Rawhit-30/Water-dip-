import React from "react";
import ReactApexChart from "react-apexcharts";

interface SparklineChartProps {
  title: string;
}

const SparklineChart: React.FC<SparklineChartProps> = ({ title }) => {
  const options = {
    chart: {
      sparkline: { enabled: true },
    },
    xaxis: {
      categories: ["2024-01-01", "2024-01-02", "2024-01-03"],
    },
  };

  const series = [
    {
      name: title,
      data: [15, 10, 12], // Dummy data
    },
  ];

  return <ReactApexChart options={options} series={series} type="line" height={100} />;
};

export default SparklineChart;
