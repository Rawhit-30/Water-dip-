// src/components/TimeSeriesChart.tsx
import React from 'react';
import ReactApexChart from 'react-apexcharts';

interface TimeSeriesChartProps {
  data: { date: string; visitors: number }[];
}

const TimeSeriesChart: React.FC<TimeSeriesChartProps> = ({ data }) => {
  const series = [
    {
      name: "Visitors",
      data: data.map((d) => ({ x: d.date, y: d.visitors })),
    },
  ];

  const options = {
    chart: {
      type: 'line',
    },
    xaxis: {
      type: 'datetime',
    },
  };

  return <ReactApexChart options={options} series={series} type="line" />;
};

export default TimeSeriesChart;
