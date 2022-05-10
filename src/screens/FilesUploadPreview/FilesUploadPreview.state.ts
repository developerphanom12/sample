import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import { IState } from 'services/redux/reducer';

import { getReceipts } from '../Inbox/inbox.api';
import { setIsFetchingDate, setReceipts } from '../Inbox/reducer/inbox.reducer';
import { receiptCreate } from './filesUploadPreview.api';
import { resetState } from './reducer/filesUploadPreview.reducer';
import { LocationState } from './types/filesUploadPreview.types';

import { ROUTES } from 'constants/routes';

export const useFilesUploadPreviewState = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const { from } = location.state as LocationState;

  const [isLoading, setIsLoading] = useState(false);

  const {
    filesUpload: { previewFiles, filesArray },
    user: { token },
  } = useSelector((state: IState) => state);

  const onGoBackHandler = () => navigate(-1);

  const onCancelClickHandler = () => {
    dispatch(resetState());
    navigate(from.pathname, { replace: true });
  };

  const onSaveClickHandler = async () => {
    try {
      setIsLoading(true);
      const formData = new FormData();

      filesArray.forEach((file) => {
        formData.append('receipt_photos', file);
      });
      await receiptCreate(formData, token);
      const { data } = await getReceipts();

      dispatch(setReceipts({ count: data.count, data: data.data }));
      dispatch(setIsFetchingDate(true));
      dispatch(resetState());

      setIsLoading(false);
      navigate(ROUTES.inbox, { replace: true });
    } catch (error) {
      setIsLoading(false);
      dispatch(setIsFetchingDate(false));
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    previewFiles,
    filesArray,
    isLoading,
    onGoBackHandler,
    onCancelClickHandler,
    onSaveClickHandler,
  };
};
