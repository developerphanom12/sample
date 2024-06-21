import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import { IState } from 'services/redux/reducer';

import { setIsFetchingDate, setReceipts } from '../Inbox/reducer/inbox.reducer';
import { receiptCreate, salesCreate } from './filesUploadPreview.api';
import {
  resetState,
  setActiveIndex,
} from './reducer/filesUploadPreview.reducer';
import { LocationState, loany } from './types/filesUploadPreview.types';
import { INITIAL_STATE } from './filesUploadPreview.constants';

import { ROUTES } from 'constants/routes';
import { getReceipts } from '../Inbox/inbox.api';
import { updateReceiptItem } from '../ReceiptDetails/receiptDetails.api';

export const useFilesUploadPreviewState = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const onNavigateToInboxPage = () => navigate(ROUTES.purchaseInvoices);

  // const { from } = location.state as LocationState;
  const { from } = location.state as loany;
  console.log(location, from);

  const nameToShow = from.state.action === 'receipt' ? '/Upload Receipt' : 'Upload Invoice';

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
    navigate(from.state.action === 'receipt' ? '/purchase-invoices' : '/sales-invoices');
  };

  const onSaveClickHandler = async () => {
    try {
      setIsLoading(true);
      const formData = new FormData();

      filesArray.forEach((file) => {
        formData.append('receipt_photos', file);
      });
      formData.append('active_account', user.active_account || '');
      await receiptCreate(formData, token);

      dispatch(setIsFetchingDate(true));
      dispatch(resetState());
      setIsLoading(false);
      navigate(ROUTES.purchaseInvoices, { replace: true });
    } catch (error) {
      setIsLoading(false);
      dispatch(setIsFetchingDate(false));
      console.log(error);
    }
  };
  const onCreateSalesHandler = async () => {
    try {
      setIsLoading(true);
      const formData = new FormData();

      filesArray.forEach((file) => {
        formData.append('receipt_photos', file);
      });
      formData.append('active_account', user.active_account || '');
      await salesCreate(formData, token);

      dispatch(setIsFetchingDate(true));
      dispatch(resetState());
      setIsLoading(false);
      navigate(from.state.action === 'receipt' ? '/purchase-invoices' : '/sales-invoices', { replace: true });
    } catch (error) {
      setIsLoading(false);
      dispatch(setIsFetchingDate(false));
      console.log(error);
    }
  };

  const isDisableButton = previewFiles.length > 50;

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
    onCreateSalesHandler,
    nameToShow,
  };
};
