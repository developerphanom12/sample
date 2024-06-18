import Axios from 'axios';

import { CONFIG } from 'constants/config';

export const receiptCreate = (payload: FormData, token: string) => {
  const URL = `${CONFIG.apiUrl}receipt/create`; // salesinvoices/create

  return Axios.post(URL, payload, {
    headers: {
      'content-type': `multipart/form-data`,
      Authorization: `Bearer ${token}`,
    },
  });
};
export const salesCreate = (payload: FormData, token: string) => {
  const URL = `${CONFIG.apiUrl}sales-invoices/create`;
  console.warn('yehhhhhhhhh-------------------------');

  return new Promise((resolve, reject) => {
    resolve(1);
  })
  // return Axios.post(URL, payload, {
  //   headers: {
  //     'content-type': `multipart/form-data`,
  //     Authorization: `Bearer ${token}`,
  //   },
  // });
};
