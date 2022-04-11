import { apiServices, ICapiumAuthPayload } from 'services/api-service';

interface ICapiumLogin {
  socialAccountId: string;
  email: string;
  fullName: string;
  type: string;
}

export const capiumFetchUser = (payload: ICapiumAuthPayload) =>
  apiServices.capiumFetchData(payload);

export const capiumLogin = (payload: ICapiumLogin) => {
  const URL = '/auth/o-auth';
  return apiServices.postData(URL, payload);
};
