import { FC, useEffect } from 'react';

import { LoaderComponent } from 'components/Loader';
import { SuccessPopup } from 'components/SuccessPopup';

import { useMyAccountState } from './MyAccount.state';
import { MyAccountStyles as Styled } from './MyAccount.style';
import { Buttons } from './Buttons';
import { AccountFields } from './AccountFields';

export const MyAccount: FC = () => {
  const {
    accountsFields,
    isResetPassword,
    resetPasswordFields,
    isFetchingData,
    formik,
    isLoading,
    resetPasswordFormik,
    isDisabledButton,
    isShowSuccesPopup,
    setIsShowSuccesPopup,
    onCancelbuttonClickHandler,
    getProfileHandler,
    setIsResetPassword,
    onSettingsClickButtonHandler,
    onSubmitHandler,
  } = useMyAccountState();

  useEffect(() => {
    getProfileHandler();
  }, []);

  useEffect(() => {
    isShowSuccesPopup && setTimeout(setIsShowSuccesPopup, 3000);
  }, [isShowSuccesPopup]);

  return (
    <Styled.LayoutWrapper>
      {isShowSuccesPopup && (
        <Styled.SuccessPopupWrapper>
          <SuccessPopup
            titleText={
              isResetPassword
                ? 'The password has been successfully changed'
                : 'User profile has been successfully changed'
            }
          />
        </Styled.SuccessPopupWrapper>
      )}
      {isFetchingData ? (
        <Styled.LoaderWrapper>
          <LoaderComponent theme="preview" />
        </Styled.LoaderWrapper>
      ) : (
        <Styled.ContentWrapper isResetPassword={isResetPassword}>
          <Styled.Form onSubmit={onSubmitHandler}>
            <AccountFields
              isResetPassword={isResetPassword}
              resetPasswordFields={resetPasswordFields}
              formikProps={formik.getFieldProps}
              formikMeta={formik.getFieldMeta}
              resetPasswordFormikProps={resetPasswordFormik.getFieldProps}
              resetPasswordFormikMeta={resetPasswordFormik.getFieldMeta}
              accountsFields={accountsFields}
            />
            <Buttons
              settingsButtonText={
                isResetPassword ? 'Settings' : 'Reset Password'
              }
              onClickSettingsButtonHandler={
                isResetPassword
                  ? onSettingsClickButtonHandler
                  : setIsResetPassword
              }
              onCancelbuttonClickHandler={onCancelbuttonClickHandler}
              isDisabledButton={isDisabledButton}
              isLoading={isLoading}
              isCancelButton={isResetPassword}
            />
          </Styled.Form>
        </Styled.ContentWrapper>
      )}
    </Styled.LayoutWrapper>
  );
};
