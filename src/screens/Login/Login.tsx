import { STRINGS } from 'constants/strings';
import signIn from 'assets/icons/sign-in-up.png';
import { LoginForm } from './LoginForm/LoginForm';
import { useLoginState } from './Login.state';
import { Styled } from './Login.style';

export const Login = () => {
  const { isShowPassword, formik, onTogglePasswordVisibility } =
    useLoginState();

  return (
    <Styled.MainWrapper>
      <Styled.Section>
        <Styled.LeftSideContentWrapper>
          <Styled.Title>
            {STRINGS.sign_in_up.title}
            <Styled.BoldText>
              {STRINGS.sign_in_up.hub}
            </Styled.BoldText>
          </Styled.Title>
          <Styled.SubTitle>
            {STRINGS.sign_in_up.sub_title}
          </Styled.SubTitle>

          <Styled.ImageWrapper>
            <img src={signIn} alt="Log In" />
          </Styled.ImageWrapper>
        </Styled.LeftSideContentWrapper>
      </Styled.Section>

      <Styled.Section>
        <Styled.RightSideContentWrapper>
          <Styled.TabsWrapper>
            <Styled.ActiveTabWrapper>
              <Styled.Tab isActive>
                {STRINGS.sign_in_up.sign_in}
              </Styled.Tab>
              <Styled.ActiveLine />
            </Styled.ActiveTabWrapper>
            <Styled.Tab>{STRINGS.sign_in_up.sign_up}</Styled.Tab>
          </Styled.TabsWrapper>

          <LoginForm
            onFormHandleSubmit={formik.handleSubmit}
            formikProps={formik.getFieldProps}
            formikMeta={formik.getFieldMeta}
            onTogglePasswordVisibility={onTogglePasswordVisibility}
            isShowPassword={isShowPassword}
            isValid={formik.isValid}
          />
        </Styled.RightSideContentWrapper>
      </Styled.Section>
    </Styled.MainWrapper>
  );
};
