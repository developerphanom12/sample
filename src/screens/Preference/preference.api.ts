import { apiServices } from 'services/api-service';

export const userInfoCreate = (payload: {
  name?: string;
  currency: string;
  date_format: string;
}) => {
  const URL = '/company/create';
  return apiServices.postData(URL, payload);
};
