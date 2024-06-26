import { FC, useEffect , memo } from 'react';

import { ReceiptDetailsHeader } from 'components/ReceiptDetailsHeader';
import { PhotoPreview } from 'components/PhotoPreview';
import { PhotoDetails } from 'components/PhotoDetails';

import { ReceiptDetailsStyles as Styled } from './ReceiptDetails.style';
import { useReceiptDetailsState } from './receiptDetails.state';
import { usePhotoDetailsContentState } from 'components/PhotoDetails/PhotoDetailsContent/PhotoDetailsContent.state';
import { CheckboxItem } from 'components/Checkbox';

export const ReceiptDetails: FC = memo(() => {
  const {
    onGoBackHandler,
    onClickGetNextReceiptHandler,
    onClickGetPrevReceiptHandler,
    onGetReceiptImageHandler,
    imageSrc,
    selectedReceipt,
    receipts,
    selectedReceiptIndex,
    isImageLoading,
    isPDF,
  } = useReceiptDetailsState();

  const {
    isLoading,
    onChangePaymentStatus,
    onChangePublishStatus,
    isPaymentStatus,
    isPublishStatus
  } = usePhotoDetailsContentState();

  useEffect(() => {
    onGetReceiptImageHandler();
  }, [selectedReceipt]);

  return (
    <Styled.Section>
      <ReceiptDetailsHeader
        onClickGetNextReceiptHandler={onClickGetNextReceiptHandler}
        onClickGetPrevReceiptHandler={onClickGetPrevReceiptHandler}
        totalReceiptsCount={receipts?.length}
        currentReceiptPosition={Number(selectedReceiptIndex) + 1}
        onGoBackHandler={onGoBackHandler}
        customId={selectedReceipt?.custom_id}
      />
      <Styled.Wrapper>
        <PhotoPreview
          imageSrc={imageSrc}
          isImageLoading={isImageLoading}
          isPDF={isPDF}
        />
        <div style={{ overflowY: "auto" }}>
          <div style={{ height: "auto" }}>
            <PhotoDetails />
          </div>
          <Styled.CheckboxContainer>
            <div></div>
            <Styled.Container>
              <Styled.Checkbox>
                <CheckboxItem
                  name={"Payment status"}
                  isChecked={isPaymentStatus}
                  labelText={"Mark as Paid"}
                  onChange={onChangePaymentStatus}
                />
                  <CheckboxItem
                  name={"Publish status"}
                  isChecked={isPublishStatus}
                  labelText={"Mark as Published"}
                  onChange={onChangePublishStatus}
                />
              </Styled.Checkbox>
              <Styled.Description>
                <Styled.DescriptionInput type="text" placeholder="Description" />
              </Styled.Description>
            </Styled.Container>
          </Styled.CheckboxContainer>
        </div>
      </Styled.Wrapper>
    </Styled.Section>
  );
});
