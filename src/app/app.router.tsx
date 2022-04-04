import { FC } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { Login } from 'screens/Login/Login';
import { SignUp } from 'screens/SignUp/SignUp';

import { ROUTES } from 'constants/routes';

export const AppRouter: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.home} element={<Login />} />
        <Route path={ROUTES.sign_up} element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};
