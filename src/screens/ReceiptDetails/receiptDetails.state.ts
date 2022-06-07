import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import { IState } from 'services/redux/reducer';

import { selectReceipt } from '../Inbox/reducer/inbox.reducer';
import { getReceiptImage } from './receiptDetails.api';

export const useReceiptDetailsState = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [imageSrc, setImageSrc] = useState('');
  const [isImageLoading, setImageLoading] = useState(false);

  const {
    inbox: { selectedReceipt, receipts, selectedReceiptIndex },
    user: { token },
  } = useSelector((state: IState) => state);

  const onGoBackHandler = () => navigate(-1);

  const onClickGetNextReceiptHandler = () => {
    if (Number(selectedReceiptIndex) + 1 >= receipts.length) return;
    dispatch(selectReceipt(Number(selectedReceiptIndex) + 1));
  };

  const onClickGetPrevReceiptHandler = () => {
    if (Number(selectedReceiptIndex) < 1) return;

    dispatch(selectReceipt(Number(selectedReceiptIndex) - 1));
  };

  const onGetReceiptImageHandler = async () => {
    try {
      setImageLoading(true);
      const { data } = await getReceiptImage(
        selectedReceipt?.photos[0] || '',
        token
      );

      setImageSrc(URL.createObjectURL(data) || '');
      setImageLoading(false);
    } catch (error) {
      console.log(error);
      setImageLoading(false);
    } finally {
      setImageLoading(false);
    }
  };

  return {
    selectedReceipt,
    imageSrc,
    receipts,
    selectedReceiptIndex,
    isImageLoading,
    onGetReceiptImageHandler,
    onGoBackHandler,
    onClickGetNextReceiptHandler,
    onClickGetPrevReceiptHandler,
  };
};
