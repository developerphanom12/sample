import { FC } from 'react';

import { AuthTabsStyles as Styled } from './AuthTabs.styles';

import { STRINGS } from 'constants/strings';

interface IAuthTabsprops {
  isSignUp?: boolean;
  onSignUpClickHandler?: () => void;
  onSignInClickHandler?: () => void;
}

export const AuthTabs: FC<IAuthTabsprops> = (props) => {
  const { onSignInClickHandler, onSignUpClickHandler, isSignUp } = props;
  return (
    <Styled.TabsWrapper>
      <Styled.ActiveTabWrapper onClick={onSignInClickHandler}>
        <Styled.Tab isActive={!isSignUp}>
          {STRINGS.sign_in_up.sign_in}
        </Styled.Tab>
        {!isSignUp && <Styled.ActiveLine />}
      </Styled.ActiveTabWrapper>
      <Styled.ActiveTabWrapper>
        <Styled.Tab isActive={isSignUp} onClick={onSignUpClickHandler}>
          {STRINGS.sign_in_up.sign_up}
        </Styled.Tab>
        {isSignUp && <Styled.ActiveLine />}
      </Styled.ActiveTabWrapper>
    </Styled.TabsWrapper>
  );
};
