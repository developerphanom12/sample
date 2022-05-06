import { FC } from 'react';

import { Button } from 'components/Button';
import { ReceiptDetailsHeader } from 'components/ReceiptDetailsHeader';
import { ReceiptPreviewItem } from 'components/ReceiptPreviewItem';

import { useFilesUploadPreviewState } from './FilesUploadPreview.state';
import { FilesUploadPreviewStyles as Styled } from './FilesUploadPreview.style';

export const FilesUploadPreview: FC = () => {
  const {
    previewFiles,
    isLoading,
    onGoBackHandler,
    onCancelClickHandler,
    onSaveClickHandler,
  } = useFilesUploadPreviewState();

  return (
    <Styled.LayoutWrapper>
      <ReceiptDetailsHeader isBackButton onGoBackHandler={onGoBackHandler} />
      <Styled.MainWrapper>

        <Styled.Wrapper>
          <Styled.PhotosWrapper>
            {previewFiles?.map((file, index) => {
              return (
                <ReceiptPreviewItem
                  key={file.fileName}
                  imageSrc={file.fileSrc}
                  isActive
                  altName={`receipt${index}`}
                />
              );
            })}
          </Styled.PhotosWrapper>
          <Styled.PhotoPreviewWrapper>
            <Styled.CenterWrapper>
              <Styled.ImageWrapper>
                <Styled.ReceiptImage
                  src={previewFiles[0]?.fileSrc}
                  alt={previewFiles[0]?.fileName}
                />
              </Styled.ImageWrapper>
            </Styled.CenterWrapper>
            <Styled.ButtonsBoxWrapper>
              <Styled.ButtonsBox>
                <Button
                  onClick={onCancelClickHandler}
                  themedButton="secondary"
                  width="secondary"
                >
                  Cancel
                </Button>
                <Button
                  isLoading={isLoading}
                  themedButton="primary"
                  width="secondary"
                  onClick={onSaveClickHandler}
                >
                  Upload receipt (1)
                </Button>
              </Styled.ButtonsBox>
            </Styled.ButtonsBoxWrapper>
          </Styled.PhotoPreviewWrapper>
        </Styled.Wrapper>

      </Styled.MainWrapper>
    </Styled.LayoutWrapper>
  );
};
