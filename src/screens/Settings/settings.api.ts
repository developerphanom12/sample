import { apiServices } from 'services/api-service';

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
  const URL = `company-member/update${memberId}`;
  return apiServices.changeData(URL, payload);
};

export const deleteCompanyMember = (memberId: string) => {
  const URL = `company-member/delete${memberId}`;
  return apiServices.deleteData(URL);
};

export const getAllCompanies = () => {
  const URL = `company/get-all`;
  return apiServices.fetchData(URL);
};
