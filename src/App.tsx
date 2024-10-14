import React from "react";
import TimeSeriesChart from "./components/TimeSeriesChart";
import ColumnChart from "./components/ColumnChart";
import SparklineChart from "./components/SparklineChart";
import DateRangePicker from "./components/DateRangePicker";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Hotel Booking Dashboard</h1>

        {/* Date Range Picker */}
        <div className="flex justify-center mb-6">
          <DateRangePicker onDateChange={() => {}} />
        </div>

        {/* Grid layout for the charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First row - Two charts */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-center">Visitors Per Day</h2>
            <TimeSeriesChart />
          </div>

          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-center">Visitors by Country</h2>
            <ColumnChart />
          </div>

          {/* Second row - Two charts */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-center">Adult Visitors</h2>
            <SparklineChart title="Total Adults" />
          </div>

          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-center">Children Visitors</h2>
            <SparklineChart title="Total Children" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
