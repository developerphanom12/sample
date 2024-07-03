import { FC } from "react";

import { DeleteModalWindow } from "components/DeleteModalWindow";
import { MasterExpenseModalWindow } from "components/MasterExpenseModalWindow/MasterModalWindow";

export const MasterExpenseModalWindowBox: FC<IModalExpenseWindowsBox> = (props) => {
	const {
		isLoading,
		deleteItemName,
		isModalWindowOpen,
		headerText,
		radioReportFormType,
		inputValueReportFor,
		inputValueReportDate,
		inputValueReportName,
		onChangeReportFormHandler,
		onChangeReportForHandler,
		onChangeReportDateHandler,
		onChangeReportNameHandler,
		onDeleteButtonClickHandler,
		// onSaveButtonCLickHandler,
		// onEnterCreateItemClick,
		isDeleteModalWindowOpen,
		onCloseDeleteModalWindowHandler,
		// isDisableButton,
		categoryName,
		// dateValue,
		// reportName
	} = props;
	return (
		<>
			<MasterExpenseModalWindow
				// isDisableButton={isDisableButton}
				isModalWindowOpen={isModalWindowOpen}
				headerText={headerText}
				radioReportFormType={radioReportFormType}
				onChangeReportFormHandler={onChangeReportFormHandler}
				inputValueReportFor={inputValueReportFor}
				onChangeReportForHandler={onChangeReportForHandler}
				inputValueReportDate={inputValueReportDate}
				onChangeReportDateHandler={onChangeReportDateHandler}
				inputValueReportName={inputValueReportName}
				onChangeReportNameHandler={onChangeReportNameHandler}
				// onEnterCreateItemClick={onEnterCreateItemClick}
				// onSaveButtonCLickHandler={onSaveButtonCLickHandler}
				isLoading={isLoading}
			/>
			{/* <DeleteModalWindow onCloseDeleteModalWindowHandler={onCloseDeleteModalWindowHandler} onDeleteButtonClickHandler={onDeleteButtonClickHandler} isDeleteModalWindowOpen={isDeleteModalWindowOpen} deleteItemName={deleteItemName} isLoading={isLoading} categoryName={categoryName} /> */}
		</>
	);
};
