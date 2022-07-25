import { FC } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { IState } from 'services/redux/reducer';
import { isTokenExpired } from 'services/utils';

import { ROUTES } from 'constants/routes';

export const PrivateRouter: FC = () => {
  const {
    user: { token },
  } = useSelector((state: IState) => state);

  const location = useLocation();
  const isExpiredToken = isTokenExpired(token);

  return token && !isExpiredToken ? (
    <Outlet />
  ) : (
    <Navigate to={ROUTES.login} state={{ from: location }} />
  );
};
