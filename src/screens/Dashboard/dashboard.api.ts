import { apiServices } from 'services/api-service';

export const getReceiptStatistic = (timeFrames?: {
  date_start: string;
  date_end: string;
}) => {
  const URL = `dashboard/get-statistic`;
  return apiServices.fetchData(URL, {
    date_start: timeFrames?.date_start,
    date_end: timeFrames?.date_end,
  });
};
