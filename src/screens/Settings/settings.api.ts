import Axios from 'axios';

import { apiServices } from 'services/api-service';

import { CONFIG } from 'constants/config';
interface ICreateCompanyMemberPayload {
  name: string;
  role: string;
  email: string;
}

export const logOut = () => {
  const URL = `auth/log-out`;
  return apiServices.changeData(URL, {});
};

export const getCompanyMembers = (params?: ISearchParams) => {
  const URL = 'company/get-members';
  return apiServices.fetchData(URL, params);
};

export const createCompanyMember = (payload: ICreateCompanyMemberPayload) => {
  const URL = `company-member/create`;
  return apiServices.postData(URL, payload);
};

export const updateCompanyMember = (
  payload: Omit<ICreateCompanyMemberPayload, 'email'>,
  memberId: string
) => {
  const URL = `company-member/update/${memberId}`;
  return apiServices.changeData(URL, payload);
};

export const deleteCompanyMember = (memberId: string) => {
  const URL = `company-member/delete/${memberId}`;
  return apiServices.deleteData(URL);
};

export const getAllCompanies = () => {
  const URL = `company/get-all`;
  return apiServices.fetchData(URL);
};

export const getManyCompanies = (params?: ISearchParams) => {
  const URL = `company/get-many`;
  return apiServices.fetchData(URL, params);
};

export const getOneCompany = (companyId: string) => {
  const URL = `company/get/${companyId}`;
  return apiServices.fetchData(URL);
};

export const companyDelete = (companyId: string) => {
  const URL = `company/delete/${companyId}`;
  return apiServices.deleteData(URL);
};

export const companyDeleteLogo = (companyId: string) => {
  const URL = `company/delete-logo/${companyId}`;
  return apiServices.deleteData(URL);
};

export const changeCompanyLogo = (payload: FormData, token: string) => {
  const URL = `${CONFIG.apiUrl}company/change-logo`;
  return Axios.post(URL, payload, {
    headers: {
      'content-type': `multipart/form-data`,
      Authorization: `Bearer ${token}`,
    },
  });
};
export const companyCreate = (payload: FormData, token: string) => {
  const URL = `${CONFIG.apiUrl}company/create`;
  return Axios.post(URL, payload, {
    headers: {
      'content-type': `multipart/form-data`,
      Authorization: `Bearer ${token}`,
    },
  });
};

export const companyUpdate = (
  payload: FormData,
  token: string,
  companyId: string
) => {
  const URL = `${CONFIG.apiUrl}company/update/${companyId}`;
  return Axios.put(URL, payload, {
    headers: {
      'content-type': `multipart/form-data`,
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getCompanyLogo = (companyId: string, token: string) => {
  const URL = `${CONFIG.apiUrl}company/get-logo/${companyId}`;
  return Axios.get(URL, {
    headers: {
      'Content-Type': 'image/jpeg',
      Authorization: `Bearer ${token}`,
    },
    responseType: 'blob',
  });
};

export const profileUploadPhoto = (payload: FormData, token: string) => {
  const URL = `${CONFIG.apiUrl}profile/upload-photo`;
  return Axios.post(URL, payload, {
    headers: {
      'content-type': `multipart/form-data`,
      Authorization: `Bearer ${token}`,
    },
  });
};
export const getProfilePhoto = (imageName: string, token: string) => {
  const URL = `${CONFIG.apiUrl}profile/get-photo/${imageName}`;
  return Axios.get(URL, {
    headers: {
      'Content-Type': 'image/jpeg',
      Authorization: `Bearer ${token}`,
    },
    responseType: 'blob',
  });
};
