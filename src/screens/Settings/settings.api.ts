import { apiServices } from 'services/api-service';

export const logOut = () => {
  const URL = `auth/log-out`;
  return apiServices.changeData(URL, {});
};
