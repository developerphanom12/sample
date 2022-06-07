import React from 'react';

import { ThreeDotsMenuStyles as Styled } from './ThreeDotsMenu.style';

export interface IThreeDotsMenu {
  onMarkAsPaidButtonHandler: () => Promise<void>;
  onClickDownloadCSVButtonHandler: () => void;
  onDownloadExcelFileHandler: () => void;
  onEmailClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onDeleteReceiptHandler: () => Promise<void>;
  isLoading?: boolean;
}

export const ThreeDotsMenu = (props: IThreeDotsMenu) => {
  const {
    onMarkAsPaidButtonHandler,
    onClickDownloadCSVButtonHandler,
    onDownloadExcelFileHandler,
    onEmailClick,
    onDeleteReceiptHandler,
    isLoading,
  } = props;
  return (
    <Styled.Wrapper>
      <Styled.Item onClick={onMarkAsPaidButtonHandler}>
        Mark as paid
      </Styled.Item>
      <Styled.Item onClick={onDownloadExcelFileHandler}>
        Export to excel
      </Styled.Item>
      <Styled.Item onClick={onClickDownloadCSVButtonHandler}>
        Export to CSV
      </Styled.Item>
      <Styled.Item onClick={onEmailClick}>Email</Styled.Item>
      <Styled.Item onClick={onDeleteReceiptHandler}>Delete</Styled.Item>
    </Styled.Wrapper>
  );
};
