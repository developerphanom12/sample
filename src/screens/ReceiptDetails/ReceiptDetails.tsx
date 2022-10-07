import { FC, useEffect } from 'react';

import { ReceiptDetailsHeader } from 'components/ReceiptDetailsHeader';
import { PhotoPreview } from 'components/PhotoPreview';
import { PhotoDetails } from 'components/PhotoDetails';

import { ReceiptDetailsStyles as Styled } from './ReceiptDetails.style';
import { useReceiptDetailsState } from './receiptDetails.state';

export const ReceiptDetails: FC = () => {
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
        <PhotoDetails />
      </Styled.Wrapper>
    </Styled.Section>
  );
};
