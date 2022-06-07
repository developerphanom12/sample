import Axios from 'axios';

import { apiServices } from 'services/api-service';

import { CONFIG } from 'constants/config';

export const updateReceiptItem = (payload: IUpdateReceiptItemPayload) => {
  const URL = 'receipt/update';
  return apiServices.changeData(URL, payload);
};

export const getReceiptImage = (imageName: string, token: string) => {
  const URL = `${CONFIG.apiUrl}receipt/images/${imageName}`;

  return Axios.get(URL, {
    headers: {
      'Content-Type': 'image/jpeg',
      Authorization: `Bearer ${token}`,
    },
    responseType: 'blob',
  });
};

type TDirection = 'category' | 'supplier' | 'payment-type';

export const getAllMasterItems = (urlDirection: TDirection) => {
  const URL = `${urlDirection}/get-all`;
  return apiServices.fetchData(URL);
};
