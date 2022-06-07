import { FC } from 'react';

import { SuccessPopupStyles as Styled } from './SuccessPopup.style';

interface ISuccessPopupProps {
  titleText: string;
}
export const SuccessPopup: FC<ISuccessPopupProps> = (props) => {
  const { titleText } = props;
  return (
    <Styled.Wrapper>
      <Styled.Title>{titleText}</Styled.Title>
    </Styled.Wrapper>
  );
};
