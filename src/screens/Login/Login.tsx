import { STRINGS } from "constants/strings";
import { LoginStyles } from "./Login.style";
import signIn from "assets/icons/sign-in-up.png";

export const Login = () => {
  return (
    <LoginStyles.MainWrapper>
      <LoginStyles.Section>
        <LoginStyles.LeftSideContentWrapper>
          <LoginStyles.Title>
            {STRINGS.sign_in_up.title}
            <LoginStyles.BoldText>
              {STRINGS.sign_in_up.hub}
            </LoginStyles.BoldText>
          </LoginStyles.Title>
          <LoginStyles.SubTitle>
            {STRINGS.sign_in_up.sub_title}
          </LoginStyles.SubTitle>

          <LoginStyles.ImageWrapper>
            <img src={signIn} alt="Log In" />
          </LoginStyles.ImageWrapper>
        </LoginStyles.LeftSideContentWrapper>
      </LoginStyles.Section>

      <LoginStyles.Section>
        <LoginStyles.RightSideContentWrapper>
          <LoginStyles.TabsWrapper>
            <LoginStyles.ActiveTabWrapper>
              <LoginStyles.Tab isActive>
                {STRINGS.sign_in_up.sign_in}
              </LoginStyles.Tab>
              <LoginStyles.ActiveLine />
            </LoginStyles.ActiveTabWrapper>
            <LoginStyles.Tab>{STRINGS.sign_in_up.sign_up}</LoginStyles.Tab>
          </LoginStyles.TabsWrapper>
        </LoginStyles.RightSideContentWrapper>
      </LoginStyles.Section>
    </LoginStyles.MainWrapper>
  );
};
