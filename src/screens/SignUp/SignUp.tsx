import { FC } from 'react';

import { AuthImageSection } from 'components/AuthImageSection/AuthImageSection';
import { AuthTabs } from 'components/AuthTabs/AuthTabs';

import { useSignUpState } from './SignUp.state';
import { SignUpForm } from './SignUpForm/SignUpForm';
import { SignUpStyles as Styled } from './SignUp.styles';

export const SignUp: FC = () => {
  const {
    onLoginClickHandler,
    onTogglePasswordVisibility,
    isShowPassword,
    formik,
  } = useSignUpState();

  return (
    <Styled.MainWrapper>
      <AuthImageSection />

      <Styled.Section>
        <Styled.RightSideContentWrapper>
          <AuthTabs isSignUp onSignInClickHandler={onLoginClickHandler} />

          <SignUpForm
            formikMeta={formik.getFieldMeta}
            formikProps={formik.getFieldProps}
            onTogglePasswordVisibility={onTogglePasswordVisibility}
            onFormHandleSubmit={formik.handleSubmit}
            isShowPassword={isShowPassword}
            isValid={formik.isValid && formik.dirty}
          />
        </Styled.RightSideContentWrapper>
      </Styled.Section>
    </Styled.MainWrapper>
  );
};
