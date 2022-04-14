import { FC } from 'react';

import { CloseButton } from '../CloseButton';
import { ReceiptItemStyles as Styled } from './ReceiptItem.style';

interface IReceiptItemProps {
  onDeleteReceiptHandler: () => void;
  receiptNumber: string | number;
  receiptId: string;
}

export const ReceiptItem: FC<IReceiptItemProps> = (props) => {
  const { onDeleteReceiptHandler, receiptNumber, receiptId } = props;
  return (
    <Styled.Wrapper id={receiptId}>
      <Styled.Text>{`Receipt ${receiptNumber}`}</Styled.Text>
      <CloseButton onClickHandler={onDeleteReceiptHandler} />
    </Styled.Wrapper>
  );
};
