import errorPage from 'assets/icons/error-page.png';

import { Button } from 'components/Button';
import { NotFoundStyles as Styled } from './NotFound.style';

import { NOT_FOUND_STRINGS } from './constants';

import { ROUTES } from 'constants/routes';

export const NotFound = () => {
  return (
    <Styled.MainWrapper>
      <Styled.ContentWrapper>
        <Styled.ImageWrapper>
          <img src={errorPage} alt="Not found" />
        </Styled.ImageWrapper>
        <Styled.Title>{NOT_FOUND_STRINGS.title}</Styled.Title>
        <Styled.SubTitle>{NOT_FOUND_STRINGS.subTitle}</Styled.SubTitle>
        <Styled.ButtonWrapper to={ROUTES.login}>
          <Button themedButton="primary" width="auth">
            {NOT_FOUND_STRINGS.buttonText}
          </Button>
        </Styled.ButtonWrapper>
      </Styled.ContentWrapper>
    </Styled.MainWrapper>
  );
};
