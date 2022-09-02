import { apiServices } from 'services/api-service';

export const getCompanyInvitation = (params?: ISearchParams) => {
  const URL = `company/get-invitation`;
  return apiServices.fetchData(URL, params);
};
