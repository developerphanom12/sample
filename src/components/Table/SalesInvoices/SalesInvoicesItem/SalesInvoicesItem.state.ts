import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { IState } from 'services/redux/reducer';

import { selectReceipt } from 'screens/Inbox/reducer/inbox.reducer';

import { ROUTES } from 'constants/routes';

interface IuseTableInboxAdminItemState {
  itemIndex: number;
}

export const useSalesInvoicesItemState = (
  props: IuseTableInboxAdminItemState
) => {
  const { itemIndex } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state: IState) => state.user);

  const onReceiptDetailsClickHandler = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    dispatch(selectReceipt(itemIndex));
    navigate(ROUTES.receiptDetails);
  };
  return { ...user.userInfo, onReceiptDetailsClickHandler };
};
