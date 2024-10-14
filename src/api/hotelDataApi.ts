// hotelDataApi.ts
import { hotelData } from '../data/hotelData';

export const getFilteredData = (startDate: Date | null, endDate: Date | null) => {
  if (!startDate || !endDate) return hotelData;

  return hotelData.filter((entry) => {
    const entryDate = new Date(entry.arrival_date);
    return entryDate >= startDate && entryDate <= endDate;
  });
};
