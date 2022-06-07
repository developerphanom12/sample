import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { deleteFile } from 'screens/FilesUploadPreview/reducer';

export const useReceiptPreviewItemState = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onDeleteReceiptFile = (event: React.MouseEvent<HTMLDivElement>) => {
    dispatch(deleteFile(event.currentTarget.id));
    navigate(-1);
  };
  return onDeleteReceiptFile;
};
