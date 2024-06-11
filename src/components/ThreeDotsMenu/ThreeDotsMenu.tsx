import React from "react";

import { ThreeDotsMenuStyles as Styled } from "./ThreeDotsMenu.style";

export interface IThreeDotsMenu {
	onMarkAsPaidButtonHandler: () => Promise<void>;
	onClickDownloadCSVButtonHandler: () => void;
	onDownloadExcelFileHandler: () => void;
	onEmailClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
	onDeleteItemHandler: () => Promise<void>;
	dot3ExpReport?: boolean;
}

export const ThreeDotsMenu = (props: IThreeDotsMenu) => {
	const { onMarkAsPaidButtonHandler, onClickDownloadCSVButtonHandler, onDownloadExcelFileHandler, onEmailClick, onDeleteItemHandler } = props;
	return (
		<Styled.Wrapper>
			{props?.dot3ExpReport ? <Styled.Item onClick={onMarkAsPaidButtonHandler}>Add to Expense Report</Styled.Item> : null}
			<Styled.Item onClick={onMarkAsPaidButtonHandler}>Mark as paid</Styled.Item>
			<Styled.Item onClick={onMarkAsPaidButtonHandler}>Mark as paid</Styled.Item>
			<Styled.Item onClick={onMarkAsPaidButtonHandler}>Mark as Approved</Styled.Item>
			<Styled.Item onClick={onMarkAsPaidButtonHandler}>Mark as Rejected</Styled.Item>
			<Styled.Item onClick={onMarkAsPaidButtonHandler}>Mark as Published</Styled.Item>
			<Styled.Item onClick={onMarkAsPaidButtonHandler}>Mark as Unpaid</Styled.Item>
			<Styled.Item onClick={onMarkAsPaidButtonHandler}>Withdrawl Approval</Styled.Item>
			<Styled.Item onClick={onMarkAsPaidButtonHandler}>Withdrawl Rejection</Styled.Item>
			<Styled.Item onClick={onMarkAsPaidButtonHandler}>Mark as Unpublished</Styled.Item>
			<Styled.Item onClick={onMarkAsPaidButtonHandler}>Send</Styled.Item>
			<Styled.Item onClick={onDownloadExcelFileHandler}>Delete</Styled.Item>
			<Styled.Item onClick={onClickDownloadCSVButtonHandler}>Export to CSV</Styled.Item>
			<Styled.Item onClick={onClickDownloadCSVButtonHandler}>Export to PDF</Styled.Item>
			<Styled.Item onClick={onEmailClick}>Email</Styled.Item>
			<Styled.Item onClick={onDeleteItemHandler}>Delete</Styled.Item>
		</Styled.Wrapper>
	);
};
