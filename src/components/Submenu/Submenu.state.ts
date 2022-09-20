import { useDispatch, useSelector } from 'react-redux';

import { IState } from 'services/redux/reducer';

import { setActiveTab } from 'screens/Master/reducer/master.reducer';

export const useSubMenuState = () => {
  const dispatch = useDispatch();

  const {
    master: { activeTabName },
  } = useSelector((state: IState) => state);

  const onClickTabHandler = (event: React.MouseEvent<HTMLLIElement>) => {
    if (activeTabName === event.currentTarget.id) return;
    dispatch(setActiveTab(event.currentTarget.id || 'Categories'));
  };

  return { onClickTabHandler, activeTabName };
};
