import { FC } from 'react';

import { AuthImageSection } from 'components/AuthImageSection';
import { AuthTabs } from 'components/AuthTabs';

import { ResetPasswordStyles as Styled } from './ResetPassword.style';
import { RESET_PASSWORD_STRINGS as Strings } from './constants';
import { ResetPasswordForm } from './ResetPasswordForm';
import { useResetPasswordState } from './ResetPassword.state';

export const ResetPassword: FC = () => {
  const formik = useResetPasswordState();
  return (
    <Styled.MainWrapper>
      <AuthImageSection />
      <Styled.Section>
        <Styled.RightSideContentWrapper>
          <AuthTabs tabText={Strings.resetPassword} />
          <ResetPasswordForm
            formikMeta={formik.getFieldMeta}
            formikProps={formik.getFieldProps}
            onFormHandleSubmit={formik.handleSubmit}
            isValid={formik.dirty && formik.isValid}
            isSubmiting={formik.isSubmitting}
          />
        </Styled.RightSideContentWrapper>
      </Styled.Section>
    </Styled.MainWrapper>
  );
};
