import { FC } from 'react';

import errorPage from 'assets/icons/error-page.png';

import { Button } from 'components/Button';

import { SupportStyles as Styled } from './Support.style';
import { SUPPORT_NOT_FOUND_STRINGS as Strings } from './constants';

import { ROUTES } from 'constants/routes';

export const Support: FC = () => (
  <Styled.MainWrapper>
    <Styled.ContentWrapper>
      <Styled.Image src={errorPage} />
      <Styled.Title>{Strings.title}</Styled.Title>
      <Styled.SubTitle>{Strings.subTitle}</Styled.SubTitle>
      <Styled.Link to={ROUTES.home}>
        <Button themedButton="roundedRed" width="roundedBig">
          {Strings.buttonText}
        </Button>
      </Styled.Link>
    </Styled.ContentWrapper>
  </Styled.MainWrapper>
);
