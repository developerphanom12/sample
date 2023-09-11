import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import { IState } from 'services/redux/reducer';

import { setIsFetchingDate, setReceipts } from '../Inbox/reducer/inbox.reducer';
import { receiptCreate } from './filesUploadPreview.api';
import {
  resetState,
  setActiveIndex,
} from './reducer/filesUploadPreview.reducer';
import { LocationState } from './types/filesUploadPreview.types';
import { INITIAL_STATE } from './filesUploadPreview.constants';

import { ROUTES } from 'constants/routes';
import { getReceipts } from '../Inbox/inbox.api';
import { updateReceiptItem } from '../ReceiptDetails/receiptDetails.api';

export const useFilesUploadPreviewState = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const onNavigateToInboxPage = () => navigate(ROUTES.inbox);

  const { from } = location.state as LocationState;

  const [isLoading, setIsLoading] = useState(false);

  const {
    filesUpload: { previewFiles, filesArray, activeIndex },
    user: { token, user },
  } = useSelector((state: IState) => state);

  const [state, setState] = useState(INITIAL_STATE);

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      currentFileName: previewFiles[activeIndex]?.fileName,
      currentFileSrc: previewFiles[activeIndex]?.fileSrc,
      curretFileType: previewFiles[activeIndex]?.fileType,
    }));
  }, [previewFiles]);

  const onChooseReceiptHandler = (
    fileName: string,
    fileSrc: string,
    fileType: string
  ) => {
    setState((prevState) => ({
      ...prevState,
      currentFileName: fileName,
      currentFileSrc: fileSrc,
      curretFileType: fileType,
    }));
    dispatch(setActiveIndex(fileName));
  };

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
      formData.append('active_account', user.active_account || '');
      const { data } = await receiptCreate(formData, token);
      await Promise.all(
        data.map((item: any) =>
          updateReceiptItem({ id: item.id, payment_status: true })
        )
      );

      dispatch(setIsFetchingDate(true));
      dispatch(resetState());
      setIsLoading(false);
      navigate(ROUTES.inbox, { replace: true });
    } catch (error) {
      setIsLoading(false);
      dispatch(setIsFetchingDate(false));
      console.log(error);
    }
  };

  const isDisableButton = previewFiles.length > 10;

  return {
    ...state,
    previewFiles,
    filesArray,
    isLoading,
    isDisableButton,
    onChooseReceiptHandler,
    onNavigateToInboxPage,
    onGoBackHandler,
    onCancelClickHandler,
    onSaveClickHandler,
  };
};
