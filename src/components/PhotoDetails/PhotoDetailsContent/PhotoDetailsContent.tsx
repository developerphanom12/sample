import { FC, useEffect, memo } from "react";

import { StatusBar } from "../../StatusBar";
import { ButtonsBox } from "../ButtonsBox";
import { FieldsBox } from "./FieldsBox";
import { usePhotoDetailsContentState } from "./PhotoDetailsContent.state";
import { PhotoDetailsContentStyles as Styled } from "./PhotoDetailsContent.style";
import { PhotoDetailsContentItem } from "./PhotoDetailsContentItem";
import { ButtonsBoxNew } from "components/PhotoDetails/ButtonBoxNew";
import { CheckboxItem } from "components/Checkbox";

import PurchaseTable from "components/Purchases/PurchasesTable";
import { PhotoDetailsTabs } from "../PhotoDetailsTabs";

interface ChildProps {
	changePaid: boolean;
	fnChangePaid: () => void;
	actionValue: boolean;
	fnGetPayStatus: (what: boolean | undefined) => void;
	// onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	// onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  }

export const PhotoDetailsContent: FC<ChildProps> = memo((props) => {
	const { changePaid, fnChangePaid, actionValue, fnGetPayStatus } = props;
	console.log('!!!!!!!!!!!!!!!!! - RDContent child-form', actionValue);
	// const {changePaid} = props;
	const {
		inputFields,

		statusValue,
		paymentStatus,
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

		paymentStatusFromState,
		onChangePaymentStatus,
		paymentStatusHandler,
		onChangePublishStatus,
	} = usePhotoDetailsContentState();

	// console.log('func pas------', paymentStatusFromState);
	useEffect(() => {
		onGetAllMasterItemsHandler();
		fnGetPayStatus(paymentStatusFromState);
	},[paymentStatusFromState, receiptid]);
	useEffect(() => {
		if(changePaid) {
			// console.log('chnage in paid&&&&&&', changePaid);
			paymentStatusHandler(actionValue);
			fnChangePaid();
		}
	}, [changePaid]);
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
				{/* <Styled.FlexContainer>
					<Styled.ContentContainer>
						<PhotoDetailsTabs />
						<PurchaseTable />
					</Styled.ContentContainer>
					<Styled.ButtonsBoxWrapper></Styled.ButtonsBoxWrapper>
				</Styled.FlexContainer> */}
			</Styled.MainWrapper>
			{/* <Styled.ReceiptStatusContainer>
						<Styled.CheckboxContainer>
							<CheckboxItem
								name={"Payment status"}
								isChecked={paymentStatus}
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
					</Styled.ReceiptStatusContainer> */}
			<Styled.Footer>
				<ButtonsBoxNew onRejectButtonClickHandler={onChangeRadioButtonHandler} isLoading={isLoading} />
				<ButtonsBox saveReceiptHandler={saveReceiptHandler} onCancelButtonClickHandler={onCancelButtonClickHandler} isLoading={isLoading} onApproveButtonClickHandler={onChangeRadioButtonHandler} />
			</Styled.Footer>
		</Styled.Formwrapper>
	);
});
