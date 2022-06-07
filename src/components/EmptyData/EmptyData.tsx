import { FC } from 'react';

import emptyDataSrc from 'assets/icons/empty-receipts.png';

import { FileUploadButton } from '../FileUploadButton';

import { EmptyDataStyles as Styled } from './EmptyData.style';
import { Button } from '../Button';

interface IEmptyDataProps {
  imageUrl?: string;
  title?: string;
  firstSubtitle?: string;
  secondSubtitle?: string;
  buttonText?: string;
  onAddReceiptHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isNoResults?: boolean;
  isUploadFile?: boolean;
}
export const EmptyData: FC<IEmptyDataProps> = (props) => {
  const {
    imageUrl,
    firstSubtitle,
    secondSubtitle,
    title,
    isNoResults,
    isUploadFile,
    onAddReceiptHandler,
    onClick,
  } = props;

  return (
    <Styled.MainWrapper>
      {isNoResults ? (
        <Styled.ImageWrapper>
          <Styled.Image src={imageUrl || emptyDataSrc}></Styled.Image>
          <Styled.Title>No results</Styled.Title>
        </Styled.ImageWrapper>
      ) : (
        <Styled.ContentWrapper>
          <Styled.Image src={imageUrl || emptyDataSrc}></Styled.Image>
          <Styled.Title>{title}</Styled.Title>
          <Styled.SubTitle>{firstSubtitle}</Styled.SubTitle>
          <Styled.SubTitle>{secondSubtitle}</Styled.SubTitle>
          {isUploadFile ? (
            <FileUploadButton onChangeFiles={onAddReceiptHandler} />
          ) : (
            <Styled.ButtonWrapper>
              <Button width="primary" themedButton="primary" onClick={onClick}>
                Add
              </Button>
            </Styled.ButtonWrapper>
          )}
        </Styled.ContentWrapper>
      )}
    </Styled.MainWrapper>
  );
};
