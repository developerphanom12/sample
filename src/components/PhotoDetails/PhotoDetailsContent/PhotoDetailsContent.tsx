import { FC, useEffect } from "react";

import { StatusBar } from "../../StatusBar";
import { ButtonsBox } from "../ButtonsBox";
import { FieldsBox } from "./FieldsBox";
import { usePhotoDetailsContentState } from "./PhotoDetailsContent.state";
import { PhotoDetailsContentStyles as Styled } from "./PhotoDetailsContent.style";
import { PhotoDetailsContentItem } from "./PhotoDetailsContentItem";
import { ButtonsBoxNew } from "components/PhotoDetails/ButtonBoxNew";

import PurchaseTable from "components/Purchases/PurchasesTable";
import { PhotoDetailsTabs } from "../PhotoDetailsTabs";

export const PhotoDetailsContent: FC = () => {
	const {
		inputFields,

		statusValue,
		receiptid,
		dateValue,
		isOpen,
		isLoading,
		formattedDate,
		datePickerRef,
		saveReceiptHandler,
		onChangeRadioButtonHandler,
		onCancelButtonClickHandler,
		onClickOutsideDatePickerHandler,
		onDatePickerClickHandler,
		onGetAllMasterItemsHandler,
		onForbiddenCharacterClick,
	} = usePhotoDetailsContentState();

	useEffect(() => {
		onGetAllMasterItemsHandler();
	}, []);
	return (
		<Styled.Formwrapper>
			<Styled.MainWrapper>
				<Styled.StatusBarWrapper>
					<PhotoDetailsContentItem label="Status">
						<StatusBar status={statusValue as TStatuses} />
					</PhotoDetailsContentItem>
					<PhotoDetailsContentItem label="Recept ID">
						<StatusBar rid={receiptid} />
					</PhotoDetailsContentItem>
				</Styled.StatusBarWrapper>

				<Styled.Wrapper>
					<FieldsBox
						inputFields={inputFields}
						onDatePickerClickHandler={onDatePickerClickHandler}
						onClickOutsideDatePickerHandler={onClickOutsideDatePickerHandler}
						isOpen={isOpen}
						formattedDate={formattedDate}
						datePickerRef={datePickerRef}
						selectedDate={dateValue ? new Date(dateValue) : null}
						onForbiddenCharacterClick={onForbiddenCharacterClick}
					/>
				</Styled.Wrapper>

				<Styled.FlexContainer>
					<Styled.ContentContainer>
						<PhotoDetailsTabs />
						<PurchaseTable />
					</Styled.ContentContainer>
					<Styled.ButtonsBoxWrapper></Styled.ButtonsBoxWrapper>
				</Styled.FlexContainer>
			</Styled.MainWrapper>
			<Styled.Footer>
				<ButtonsBoxNew onRejectButtonClickHandler={onChangeRadioButtonHandler} isLoading={isLoading} />
				<ButtonsBox saveReceiptHandler={saveReceiptHandler} onCancelButtonClickHandler={onCancelButtonClickHandler} isLoading={isLoading} onApproveButtonClickHandler={onChangeRadioButtonHandler} />
			</Styled.Footer>
		</Styled.Formwrapper>
	);
};
