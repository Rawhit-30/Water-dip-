// src/components/LoadCSVData.tsx
import React, { useEffect } from 'react';
import Papa from 'papaparse';

interface LoadCSVDataProps {
  onDataLoaded: (data: any[]) => void;
}

const LoadCSVData: React.FC<LoadCSVDataProps> = ({ onDataLoaded }) => {
  useEffect(() => {
    // Fetch and parse the CSV data
    fetch('/data.csv')
      .then((response) => response.text())
      .then((data) => {
        Papa.parse(data, {
          header: true,
          complete: (results) => {
            onDataLoaded(results.data); // Send parsed data to parent component
          },
        });
      });
  }, [onDataLoaded]);

  return <div>Loading CSV data...</div>;
};

export default LoadCSVData;
