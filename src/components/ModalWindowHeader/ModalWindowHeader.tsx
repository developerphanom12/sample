import { FC } from 'react';

import { CloseButton } from '../CloseButton';
import { ModalWindowHeaderStyles as Styled } from './ModalWindowHeader.style';

interface IModalWindowHeaderProps {
  headerTitle: string;
  onCloseButtonHandler: () => void;
}

export const ModalWindowHeader: FC<IModalWindowHeaderProps> = (props) => {
  const { headerTitle, onCloseButtonHandler } = props;
  return (
    <Styled.HeaderBox>
      <Styled.Title>{headerTitle}</Styled.Title>
      <CloseButton onClickHandler={onCloseButtonHandler} />
    </Styled.HeaderBox>
  );
};
