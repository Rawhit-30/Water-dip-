import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface DateRangePickerProps {
  onDateChange: (startDate: Date | null, endDate: Date | null) => void;
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({ onDateChange }) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  // Update the state and trigger date change
  const handleDateChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    onDateChange(start, end);
  };

  // Search button action to trigger date filtering
  const handleSearch = () => {
    onDateChange(startDate, endDate);
  };

  return (
    <div className="flex items-center space-x-4">
      {/* Date range picker */}
      <DatePicker
        selectsRange
        startDate={startDate}
        endDate={endDate}
        onChange={handleDateChange}
        isClearable
        placeholderText="Select a date range"
        className="border rounded-md px-3 py-2"
      />

      {/* Search button */}
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Search
      </button>
    </div>
  );
};

export default DateRangePicker;
