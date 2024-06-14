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
        <div style={{ overflowY: "auto" }}>
          <div style={{ height: "auto" }}>
            <PhotoDetails />
          </div>
          <Styled.CheckboxContainer>
            <div></div>
            <Styled.Container>
              <Styled.Checkbox>
                <label>
                  <Styled.Input type="checkbox" />
                  Mark as Paid
                </label>
                <label>
                  <Styled.Input type="checkbox" />
                  Mark as Published
                </label>
              </Styled.Checkbox>
              <Styled.Description>
                <Styled.DescriptionInput type="text" placeholder="Description" />
              </Styled.Description>
            </Styled.Container>
          </Styled.CheckboxContainer>
        </div>
      </Styled.Wrapper>
      <Styled.Footer>
        <div>
          <Styled.Button>Archive</Styled.Button>
          <Styled.Button className="reject">Reject</Styled.Button>
        </div>
        <div>
          <Styled.Button className="approve">Approve & Save</Styled.Button>
          <Styled.Button className="save">Save</Styled.Button>
          <Styled.Button className="cancel">Cancel</Styled.Button>
        </div>
      </Styled.Footer>
    </Styled.Section>
  );
};
