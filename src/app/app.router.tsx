import React, { FC } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import { Login } from 'screens/Login/Login';

export const AppRouter: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.home} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
