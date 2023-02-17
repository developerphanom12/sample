import { FC } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { setInterseptors } from 'services/api-service';

import { Layout } from 'components/Layout/Layout';
import { RedirectOAuthPage } from 'components/RedirectOAuthPage';

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
import { UsersList } from 'screens/Settings/UsersList';
import { CompanyList } from 'screens/Settings/CompanyList';
import { SignUpNewMember } from 'screens/SignUpNewMember';
import { WorkSpacePicker } from 'screens/WorkSpacePicker';
import { Invites } from 'screens/Invites';
import { BindSocialAccount } from 'screens/BindSocialAccount';
import { SalesInvoices } from 'screens/SalesInvoices';
import { SalesInvoicesDetails } from 'screens/SalesInvoicesDetails';

import { PrivateRouter } from './privateRouter';

import { ROUTES } from 'constants/routes';

export const AppRouter: FC = () => {
  setInterseptors();
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.home} element={<Layout />}>
          <Route element={<PrivateRouter />}>
            <Route index element={<Dashboard />} />
            <Route path={ROUTES.invites} element={<Invites />} />
            <Route
              path={ROUTES.salesInvoices}
              element={<SalesInvoices />}
            ></Route>
            <Route
              path={ROUTES.salesInvoiceDetails}
              element={<SalesInvoicesDetails />}
            />
            <Route path={ROUTES.inbox} element={<Inbox />}>
              <Route
                path={ROUTES.receiptDetails}
                element={<ReceiptDetails />}
              />
            </Route>
            <Route
              path={ROUTES.filesUploadPreview}
              element={<FilesUploadPreview />}
            />
            <Route path={ROUTES.settings} element={<Settings />}>
              <Route index element={<MyAccount />} />
              <Route path={ROUTES.usersList} element={<UsersList />} />
              <Route path={ROUTES.companiesList} element={<CompanyList />} />
              <Route
                path={ROUTES.termsOfService}
                element={<TermsOfService />}
              />
              <Route path={ROUTES.privacyPolicy} element={<PrivacyPolicy />} />
            </Route>
            <Route path={ROUTES.support} element={<Support />} />
            <Route path={ROUTES.notFound} element={<NotFound />} />
            <Route path={ROUTES.master} element={<Master />} />
          </Route>
        </Route>
        <Route path={ROUTES.callback} element={<RedirectOAuthPage />} />
        <Route path={ROUTES.preference} element={<Preference />} />
        <Route path={ROUTES.login} element={<Login />} />
        <Route path={ROUTES.sign_up} element={<SignUp />} />
        <Route path={ROUTES.forgotPassword} element={<ForgotPassword />} />
        <Route path={ROUTES.resetPassword} element={<ResetPassword />} />
        <Route path={ROUTES.capiumLogin} element={<CapiumLogin />} />
        <Route path={ROUTES.signUpNewMember} element={<SignUpNewMember />} />
        <Route path={ROUTES.chooseCompany} element={<WorkSpacePicker />} />
        <Route
          path={ROUTES.bindSocialAccount}
          element={<BindSocialAccount />}
        />
      </Routes>
    </BrowserRouter>
  );
};
