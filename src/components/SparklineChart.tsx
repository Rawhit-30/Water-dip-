// src/components/SparklineChart.tsx
import React from 'react';
import ReactApexChart from 'react-apexcharts';

interface SparklineChartProps {
  data: number[];
  label: string;
}

const SparklineChart: React.FC<SparklineChartProps> = ({ data, label }) => {
  const series = [
    {
      name: label,
      data,
    },
  ];

  const options = {
    chart: {
      type: 'line',
      sparkline: { enabled: true },
    },
    stroke: {
      curve: 'smooth',
    },
  };

  return <ReactApexChart options={options} series={series} type="line" />;
};

export default SparklineChart;
