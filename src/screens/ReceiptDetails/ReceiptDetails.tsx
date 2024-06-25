import { FC, useEffect, useState } from "react";

import { ReceiptDetailsHeader } from "components/ReceiptDetailsHeader";
import { PhotoPreview } from "components/PhotoPreview";
import { PhotoDetailsContent } from "components/PhotoDetails/PhotoDetailsContent/PhotoDetailsContent";

import { ReceiptDetailsStyles as Styled } from "./ReceiptDetails.style";
import { useReceiptDetailsState } from "./receiptDetails.state";
import { usePhotoDetailsContentState } from "components/PhotoDetails/PhotoDetailsContent/PhotoDetailsContent.state";
// import { ButtonsBox } from "components/PhotoDetails/ButtonsBox";
// import { ButtonsBoxNew } from 'components/PhotoDetails/ButtonBoxNew';
import { CheckboxItem } from "components/Checkbox";

export const ReceiptDetails: FC = () => {
	console.log("!!!!!!!!!!!!!!!!! - RD parent");
	const { onGoBackHandler, onClickGetNextReceiptHandler, onClickGetPrevReceiptHandler, onGetReceiptImageHandler, imageSrc, selectedReceipt, receipts, selectedReceiptIndex, isImageLoading, isPDF } = useReceiptDetailsState();

	// const { isLoading, onChangeRadioButtonHandler, saveReceiptHandler, onCancelButtonClickHandler, onChangePaymentStatus, paymentStatus, onChangePublishStatus, isPaymentStatus, isPublishStatus } = usePhotoDetailsContentState();
	const [changePaid, setChangePaid] = useState(false);
	const fnChangePaid = ():void => {
		setChangePaid(false);
	}
	const [actionValue, setActionValue] = useState(false);
	const fnSetvalue = ( event: React.ChangeEvent<HTMLInputElement> ):void => {
		// console.log(event.target.checked);
		setActionValue(event.target.checked);
		setChangePaid(true);
	}
	const [payStatus, setPayStatus] = useState(false);
	const getPayStatus = (what: boolean | undefined) => {
		if (what === undefined) {
			setPayStatus(false);
		} else {
			setPayStatus(what);
		}
	};

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
					<PhotoDetailsContent changePaid={changePaid} fnChangePaid={fnChangePaid} actionValue={actionValue} fnGetPayStatus={getPayStatus} />
					<Styled.ReceiptStatusContainer>
						<Styled.CheckboxContainer>
							<CheckboxItem
								name={"Payment status"}
								isChecked={payStatus || false}
								// isChecked={false}
								labelText={"Mark as Paid"}
								onChange={fnSetvalue}
								// onChange={onChangePaymentStatus}
							/>
							{/* <CheckboxItem
								name={"Publish status"}
								isChecked={isPublishStatus}
								// isChecked={true}
								labelText={"Mark as Published"}
								onChange={onChangePublishStatus}
							/> */}
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
