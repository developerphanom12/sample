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
  isRoundedButton?: boolean;
  userRole?: string;
}
export const EmptyData: FC<IEmptyDataProps> = (props) => {
  const {
    imageUrl,
    firstSubtitle,
    secondSubtitle,
    title,
    isNoResults,
    isUploadFile,
    buttonText,
    isRoundedButton,
    userRole,
    onAddReceiptHandler,
    onClick,
  } = props;

  const isUserRole = userRole === 'user';
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
          <Styled.SubTitle>{isUserRole ? '' : firstSubtitle}</Styled.SubTitle>
          <Styled.SubTitle>{isUserRole ? '' : secondSubtitle}</Styled.SubTitle>
          {isUploadFile ? (
            <FileUploadButton
              onChangeFiles={onAddReceiptHandler}
              isRoundedButton={isRoundedButton}
              customButtonName="ADD"
            />
          ) : (
            !isUserRole && (
              <Styled.ButtonWrapper>
                <Button
                  width="primary"
                  themedButton="roundedRed"
                  onClick={onClick}
                >
                  {buttonText || 'Add'}
                </Button>
              </Styled.ButtonWrapper>
            )
          )}
        </Styled.ContentWrapper>
      )}
    </Styled.MainWrapper>
  );
};
