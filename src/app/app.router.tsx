import { FC } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { Layout } from 'components/Layout/Layout';

import { Login } from 'screens/Login/Login';
import { SignUp } from 'screens/SignUp/SignUp';
import { Preference } from 'screens/Preference';
import { ForgotPassword } from 'screens/ForgotPassword';
import { CapiumLogin } from 'screens/CapiumLogin/CapiumLogin';
import { ResetPassword } from 'screens/ResetPassword';
import { NotFound } from 'screens/NotFound';
import { Inbox } from 'screens/Inbox';
import { ReceiptDetails } from 'screens/ReceiptDetails';
import { Dashboard } from 'screens/Dashboard';
import { Settings } from 'screens/Settings';
import { Master } from 'screens/Master';
import { FilesUploadPreview } from 'screens/FilesUploadPreview';
import { TermsOfService } from 'components/TermsOfService';
import { PrivacyPolicy } from 'components/PrivacyPolicy';
import { Support } from 'screens/Support';
import { MyAccount } from 'screens/Settings/MyAccount';

import { PrivateRouter } from './privateRouter';

import { ROUTES } from 'constants/routes';
import { MyAccount } from '../screens/Settings/MyAccount';

export const AppRouter: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path={ROUTES.home} element={<Layout />}>
        <Route element={<PrivateRouter />}>
          <Route index element={<Dashboard />} />
          <Route path={ROUTES.inbox} element={<Inbox />}>
            <Route path={ROUTES.receiptDetails} element={<ReceiptDetails />} />
            <Route
              path={ROUTES.filesUploadPreview}
              element={<FilesUploadPreview />}
            />
          </Route>
          <Route path={ROUTES.settings} element={<Settings />}>
            <Route index element={<MyAccount />} />
            <Route path={ROUTES.termsOfService} element={<TermsOfService />} />
            <Route path={ROUTES.privacyPolicy} element={<PrivacyPolicy />} />
          </Route>
          <Route path={ROUTES.support} element={<Support />} />
          <Route path={ROUTES.notFound} element={<NotFound />} />
          <Route path={ROUTES.master} element={<Master />} />
        </Route>
      </Route>
      <Route path={ROUTES.preference} element={<Preference />} />
      <Route path={ROUTES.login} element={<Login />} />
      <Route path={ROUTES.sign_up} element={<SignUp />} />
      <Route path={ROUTES.forgotPassword} element={<ForgotPassword />} />
      <Route path={ROUTES.resetPassword} element={<ResetPassword />} />
      <Route path={ROUTES.capiumLogin} element={<CapiumLogin />} />
    </Routes>
  </BrowserRouter>
);
