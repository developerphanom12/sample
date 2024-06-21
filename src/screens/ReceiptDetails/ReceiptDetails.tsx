import { FC, useEffect } from "react";

import { ReceiptDetailsHeader } from "components/ReceiptDetailsHeader";
import { PhotoPreview } from "components/PhotoPreview";
import { PhotoDetailsContent } from "components/PhotoDetails/PhotoDetailsContent/PhotoDetailsContent";

import { ReceiptDetailsStyles as Styled } from "./ReceiptDetails.style";
import { useReceiptDetailsState } from "./receiptDetails.state";
import { usePhotoDetailsContentState } from "components/PhotoDetails/PhotoDetailsContent/PhotoDetailsContent.state";
import { ButtonsBox } from "components/PhotoDetails/ButtonsBox";
// import { ButtonsBoxNew } from 'components/PhotoDetails/ButtonBoxNew';
import { CheckboxItem } from "components/Checkbox";

export const ReceiptDetails: FC = () => {
	const { onGoBackHandler, onClickGetNextReceiptHandler, onClickGetPrevReceiptHandler, onGetReceiptImageHandler, imageSrc, selectedReceipt, receipts, selectedReceiptIndex, isImageLoading, isPDF } = useReceiptDetailsState();

	const {
	  isLoading,
	  onChangeRadioButtonHandler,
	  saveReceiptHandler,
	  onCancelButtonClickHandler,
	  onChangePaymentStatus,
	  onChangePublishStatus,
    isPaymentStatus,
    isPublishStatus,
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
			<Styled.BodyWrapper>
				<PhotoPreview imageSrc={imageSrc} isImageLoading={isImageLoading} isPDF={isPDF} />
				<Styled.ReceiptDetailWrapper>
					{/* <PhotoDetails /> */}
          <PhotoDetailsContent />
					<Styled.ReceiptStatusContainer>
							<Styled.CheckboxContainer>
								<CheckboxItem
									name={"Payment status"}
									isChecked={isPaymentStatus}
									// isChecked={false}
									labelText={"Mark as Paid"}
									onChange={onChangePaymentStatus}
								/>
								<CheckboxItem
									name={"Publish status"}
									isChecked={isPublishStatus}
									// isChecked={true}
									labelText={"Mark as Published"}
									onChange={onChangePublishStatus}
								/>
							</Styled.CheckboxContainer>
							<Styled.Description>
								<Styled.DescriptionInput type="text" placeholder="Description" />
							</Styled.Description>
					</Styled.ReceiptStatusContainer>
				</Styled.ReceiptDetailWrapper>
			</Styled.BodyWrapper>
			{/* <Styled.Footer>
        <div>
          <ButtonsBoxNew
            onRejectButtonClickHandler={onChangeRadioButtonHandler}
            isLoading={isLoading}
          />
        </div>
        <div style={{ display: "flex" }}>
          <ButtonsBox
            saveReceiptHandler={saveReceiptHandler}
            onCancelButtonClickHandler={onCancelButtonClickHandler}
            isLoading={isLoading}
            onApproveButtonClickHandler={onChangeRadioButtonHandler}
          />
        </div>
      </Styled.Footer> */}
		</Styled.Section>
	);
};
