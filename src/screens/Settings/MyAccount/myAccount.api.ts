import { apiServices } from 'services/api-service';

interface IUpdateUserProfile {
  fullName?: string;
  email?: string;
  country?: string;
  currency?: string;
  date_format?: string;
  active_account?: string;
}

interface IChangePassword {
  old_password?: string;
  new_password: string;
}

export const getProfile = (active_account?: string) => {
  const URL = `profile/get`;
  return apiServices.fetchData(URL, { active_account });
};

export const resetPassword = (payload: IChangePassword) => {
  const URL = `profile/change-password`;
  return apiServices.changeData(URL, payload);
};

export const updateProfile = (payload: IUpdateUserProfile) => {
  const URL = `profile/update`;
  return apiServices.changeData(URL, payload);
};
