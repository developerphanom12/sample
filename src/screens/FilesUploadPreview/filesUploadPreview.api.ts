import Axios from 'axios';

import { CONFIG } from 'constants/config';

export const receiptCreate = (payload: FormData, token: string) => {
  const URL = `${CONFIG.apiUrl}receipt/create`;

  return Axios.post(URL, payload, {
    headers: {
      'content-type': `multipart/form-data`,
      Authorization: `Bearer ${token}`,
    },
  });
};
