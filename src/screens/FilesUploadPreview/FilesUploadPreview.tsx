import { FC, useEffect } from 'react';

import { Button } from 'components/Button';
import { ReceiptPreviewItem } from 'components/ReceiptPreviewItem';
import { CustomCarousel } from 'components/CustomCarousel';
import { NavigationButton } from 'components/NavigationButton';

import { useFilesUploadPreviewState } from './FilesUploadPreview.state';
import { FilesUploadPreviewStyles as Styled } from './FilesUploadPreview.style';

export const FilesUploadPreview: FC = () => {
  const {
    previewFiles,
    filesArray,
    isLoading,
    currentFileName,
    currentFileSrc,
    onChooseReceiptHandler,
    onNavigateToInboxPage,
    onGoBackHandler,
    onCancelClickHandler,
    onSaveClickHandler,
  } = useFilesUploadPreviewState();

  useEffect(() => {
    !filesArray[0]?.name && onNavigateToInboxPage();
  }, []);

  return (
    <Styled.LayoutWrapper>
      <Styled.MainWrapper>
        <Styled.Wrapper>
          <Styled.ButtonsBoxWrapper>
            <Styled.BoxWrapper onClick={onGoBackHandler}>
              <NavigationButton
                themedButton="navigation"
                iconBehavior="iconPrevious"
              >
                <Styled.ButtonText>Back to list</Styled.ButtonText>
              </NavigationButton>
            </Styled.BoxWrapper>
            <Styled.ButtonsBox>
              <Button
                onClick={onCancelClickHandler}
                themedButton="roundedWhite"
                width="rounded"
              >
                Cancel
              </Button>
              <Button
                isLoading={isLoading}
                themedButton="roundedRed"
                width="roundedBig"
                onClick={onSaveClickHandler}
              >
                {`Upload receipt (${previewFiles.length})`}
              </Button>
            </Styled.ButtonsBox>
          </Styled.ButtonsBoxWrapper>
          <Styled.ImageWrapper>
            <Styled.ReceiptImage src={currentFileSrc} alt={currentFileName} />
          </Styled.ImageWrapper>
          <CustomCarousel>
            {previewFiles?.map((file) => {
              return (
                <ReceiptPreviewItem
                  key={file.fileName}
                  imageSrc={file.fileSrc}
                  fileName={file.fileName}
                  isActive={currentFileName === file.fileName}
                  isLastReceipt={previewFiles?.length === 1}
                  onChooseReceiptHandler={onChooseReceiptHandler}
                />
              );
            })}
          </CustomCarousel>
        </Styled.Wrapper>
      </Styled.MainWrapper>
    </Styled.LayoutWrapper>
  );
};
