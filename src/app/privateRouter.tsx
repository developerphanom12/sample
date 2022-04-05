import { FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { storageService } from '../services/storage-service';

import { ROUTES } from '../constants/routes';

interface IPrivateRouterProps {
  children: React.ReactElement
}

export const PrivateRouter: FC<IPrivateRouterProps> = (props) => {
  const { children } = props;

  const location = useLocation()
  const isToken = storageService.getToken()

  return isToken ? children : <Navigate to={ROUTES.login} state={{from: location}} />;
}
