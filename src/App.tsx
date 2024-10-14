// src/App.tsx
import React, { useState } from 'react';
import LoadCSVData from './components/LoadCSVData';
import TimeSeriesChart from './components/TimeSeriesChart';
import ColumnChart from './components/ColumnChart';
import SparklineChart from './components/SparklineChart';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './App.css';

interface BookingData {
  arrival_date_year: string;
  arrival_date_month: string;
  arrival_date_day_of_month: string;
  adults: string;
  children: string;
  babies: string;
  country: string;
}

const App: React.FC = () => {
  const [csvData, setCsvData] = useState<BookingData[]>([]);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleDataLoaded = (data: BookingData[]) => {
    setCsvData(data);
  };

  // Filter data based on date range selection
  const filteredData = csvData.filter((entry) => {
    const date = new Date(`${entry.arrival_date_year}-${entry.arrival_date_month}-${entry.arrival_date_day_of_month}`);
    return (!startDate || date >= startDate) && (!endDate || date <= endDate);
  });

  // Prepare time series data (Number of visitors per day)
  const timeSeriesData = filteredData.map((entry) => ({
    date: `${entry.arrival_date_year}-${entry.arrival_date_month}-${entry.arrival_date_day_of_month}`,
    visitors: Number(entry.adults) + Number(entry.children) + Number(entry.babies),
  }));

  // Prepare column chart data (Number of visitors per country)
  const columnData = filteredData.reduce((acc, entry) => {
    acc[entry.country] = (acc[entry.country] || 0) + Number(entry.adults) + Number(entry.children) + Number(entry.babies);
    return acc;
  }, {} as { [key: string]: number });

  // Prepare sparkline data (Total number of adults and children visitors)
  const sparklineAdultData = filteredData.map((entry) => Number(entry.adults));
  const sparklineChildrenData = filteredData.map((entry) => Number(entry.children));

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">Hotel Booking Dashboard</h1>

      {/* Date Range Picker */}
      <div className="flex justify-center mb-8">
        <div className="flex space-x-6">
          <div className="flex flex-col">
            <label className="text-lg font-medium">Start Date:</label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="yyyy-MM-dd"
              className="p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-lg font-medium">End Date:</label>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              dateFormat="yyyy-MM-dd"
              className="p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>
      </div>

      {/* Load CSV data */}
      <LoadCSVData onDataLoaded={handleDataLoaded} />

      {/* Charts in a 2x2 grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Time Series Chart */}
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Visitors Over Time</h2>
          <TimeSeriesChart data={timeSeriesData} />
        </div>

        {/* Column Chart */}
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Visitors by Country</h2>
          <ColumnChart data={Object.keys(columnData).map((country) => ({ country, visitors: columnData[country] }))} />
        </div>

        {/* Sparkline Chart for Adult Visitors */}
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Adult Visitors</h2>
          <SparklineChart data={sparklineAdultData} label="Adult Visitors" />
        </div>

        {/* Sparkline Chart for Children Visitors */}
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Children Visitors</h2>
          <SparklineChart data={sparklineChildrenData} label="Children Visitors" />
        </div>
      </div>
    </div>
  );
};

export default App;
