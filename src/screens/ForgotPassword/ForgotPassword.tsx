import { FC } from 'react';

import { AuthImageSection } from 'components/AuthImageSection/AuthImageSection';

import { AuthTabs } from 'components/AuthTabs/AuthTabs';

import { ForgotPasswordStyles as Styled } from './ForgotPassword.style';
import { useForgotPasswordState } from './ForgotPassword.state';
import { FORGOT_PASSWORD_STRINGS as Strings } from './constats';
import { ForgotPasswordForm } from './ForgotPasswordForm/ForgotPasswordForm';

export const ForgotPassword: FC = () => {
  const formik = useForgotPasswordState();

  return (
    <Styled.MainWrapper>
      <AuthImageSection />
      <Styled.Section>
        <Styled.RightSideContentWrapper>
          <AuthTabs tabText={Strings.forgotPassword} />
          <ForgotPasswordForm
            formikMeta={formik.getFieldMeta}
            formikProps={formik.getFieldProps}
            onFormHandleSubmit={formik.handleSubmit}
            isValid={formik.dirty && formik.isValid}
          />
        </Styled.RightSideContentWrapper>
      </Styled.Section>
    </Styled.MainWrapper>
  );
};
