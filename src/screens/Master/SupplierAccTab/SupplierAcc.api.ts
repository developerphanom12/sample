import { apiServices } from 'services/api-service';
import {  ICreateCategoryAcc, IUpdateCategoryAcc } from '../types/master.types';


type Direction = 'supplier' | 'payment-type';

export const createTabAccItem = (
  payload: ICreateCategoryAcc,
  urlDirection: Direction
) => {
  const URL = `${urlDirection}/create`;
  return apiServices.postData(URL, payload);
};
export const updateTabAccItem = (
  payload: IUpdateCategoryAcc,
  urlDirection: Direction
) => {
  const URL = `${urlDirection}/update`;
  return apiServices.changeData(URL, payload);
};
export const getAllTabItems = (
  urlDirection: Direction,
  params?: ISearchParams
) => {
  const URL = `${urlDirection}/get-many`;
  return apiServices.fetchData(URL, params);
};

export const getTabItemById = (
  categoryId: string,
  urlDirection: Direction,
  active_account?: string | null
) => {
  const URL = `${urlDirection}/get/${categoryId}`;
  return apiServices.fetchData(URL, { active_account });
};
export const deleteTabItem = (
  categoryId: string,
  urlDirection: Direction,
  active_account?: string | null
) => {
  const URL = `${urlDirection}/delete/${categoryId}`;
  return apiServices.deleteData(URL, { active_account });
};
