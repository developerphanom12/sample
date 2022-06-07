import axios from 'axios';

import { CONFIG } from 'constants/config';

import { TypeStore } from './redux/store';

let store: TypeStore;

export const injectStore = (_store: TypeStore) => {
  store = _store;
};

export interface ICapiumAuthPayload {
  email: string;
  password: string;
}

const capiumBaseURL = 'https://identity.diyboox.com/api/Auth/AuthenticateUser';

const getInstance = () => {
  const instance = axios.create({
    baseURL: CONFIG.apiUrl,
  });

  instance.interceptors.request.use(async (config) => {
    const token = store.getState().user.token;

    if (!token) {
      return config;
    }
    config = {
      ...config,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    return config;
  });

  return instance;
};

export const apiServices = {
  postData: (requestUrl: string, payload: any) => {
    return getInstance().post(`${requestUrl}`, payload);
  },
  fetchData: async (requestUrl: string, params?: {}) => {
    return getInstance().get(`${requestUrl}`, { params });
  },
  changeData: async (requestUrl: string, payload: any) => {
    return getInstance().put(`${requestUrl}`, payload);
  },
  deleteData: async (requestUrl: string, params?: {}) => {
    return getInstance().delete(`${requestUrl}`, { params });
  },
  updateData: async (requestUrl: string, payload: any) => {
    return getInstance().patch(`${requestUrl}`, payload);
  },
  capiumFetchData: async (payload: ICapiumAuthPayload) => {
    const data = axios.post(capiumBaseURL, payload);
    return data;
  },
};
