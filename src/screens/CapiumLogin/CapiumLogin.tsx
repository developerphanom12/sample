import { FC, useEffect } from 'react';

import { AuthImageSection } from 'components/AuthImageSection/AuthImageSection';
import { AuthTabs } from 'components/AuthTabs/AuthTabs';
import { Icon } from 'components/Icons/Icons';

import { CapiumLoginStyle as Styled } from './CapiumLogin.style';
import { CapiumLoginForm } from './CapiumLoginForm/CapiumLoginForm';
import { useCapiumLoginState } from './CapiumLogin.state';
import { CAPIUM_LOGIN_STRINGS } from './capiumLogin.contants';

export const CapiumLogin: FC = () => {
  const {
    isHoverInfo,
    isSuccess,
    isShowPassword,
    formik,
    onTogglePasswordVisibility,
    setState,
    onMouseEnterHandler,
    onMouseLeaveHandler,
  } = useCapiumLoginState();

  useEffect(() => {
    !isSuccess &&
      setTimeout(() => {
        setState((prevState) => ({
          ...prevState,
          isSuccess: true,
        }));
      }, 3500);
  }, [isSuccess]);

  return (
    <Styled.MainWrapper>
      <AuthImageSection />

      <Styled.Section>
        <Styled.RightSideContentWrapper>
          <Styled.TabWrapper>
            <Styled.IconWrapper>
              <Icon type="capiumLogo" />
            </Styled.IconWrapper>
            <AuthTabs tabText={CAPIUM_LOGIN_STRINGS.continueCapium} />
          </Styled.TabWrapper>
          <CapiumLoginForm
            isHoverInfo={isHoverInfo}
            isSuccess={isSuccess}
            isShowPassword={isShowPassword}
            formikProps={formik.getFieldProps}
            formikMeta={formik.getFieldMeta}
            isValid={formik.isValid && formik.dirty}
            onTogglePasswordVisibility={onTogglePasswordVisibility}
            onSubmitFormHandler={formik.handleSubmit}
            onMouseEnterHandler={onMouseEnterHandler}
            onMouseLeaveHandler={onMouseLeaveHandler}
            isSubmiting={formik.isSubmitting}
          />
        </Styled.RightSideContentWrapper>
      </Styled.Section>
    </Styled.MainWrapper>
  );
};
