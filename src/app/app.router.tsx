import { FC } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { Layout } from 'components/Layout/Layout';

import { Login } from 'screens/Login/Login';
import { SignUp } from 'screens/SignUp/SignUp';
import { Preference } from 'screens/Preference';
import { ForgotPassword } from 'screens/ForgotPassword/ForgotPassword';
import { CapiumLogin } from 'screens/CapiumLogin/CapiumLogin';

import { PrivateRouter } from './privateRouter';

import { ROUTES } from 'constants/routes';

export const AppRouter: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path={ROUTES.home} element={<Layout />}>
        <Route
          index
          element={
            <PrivateRouter>
              <div>HOME</div>
            </PrivateRouter>
          }
        />
      </Route>
      <Route path={ROUTES.preference} element={<Preference />} />
      <Route path={ROUTES.login} element={<Login />} />
      <Route path={ROUTES.sign_up} element={<SignUp />} />
      <Route path={ROUTES.forgotPassword} element={<ForgotPassword />} />
      <Route path={ROUTES.capiumLogin} element={<CapiumLogin />} />
    </Routes>
  </BrowserRouter>
);
