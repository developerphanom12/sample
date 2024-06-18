import React from "react";

import { ThreeDotsMenuStyles as Styled } from "./ThreeDotsMenu.style";

export interface IThreeDotsMenu {
	onMarkAsPaidButtonHandler?: () => Promise<void>;
	onMarkAsHandler: (mark:string) => Promise<void>;
	onClickDownloadCSVButtonHandler: () => void;
	onDownloadExcelFileHandler: () => void;
	onEmailClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
	onDeleteItemHandler: () => Promise<void>;
	dot3ExpReport?: boolean;
}

export const ThreeDotsMenu = (props: IThreeDotsMenu) => {
	const { onMarkAsPaidButtonHandler, onMarkAsHandler, onClickDownloadCSVButtonHandler, onDownloadExcelFileHandler, onEmailClick, onDeleteItemHandler } = props;
	return (
		<Styled.Wrapper>
			{props?.dot3ExpReport ? <Styled.Item onClick={() => onMarkAsHandler('')}>Add to Expense Report</Styled.Item> : null}
			<Styled.Item onClick={() => onMarkAsHandler('paid')}>Mark as paid</Styled.Item>
			<Styled.Item onClick={() => onMarkAsHandler('unpaid')}>Mark as Unpaid</Styled.Item>
			<Styled.Item onClick={() => onMarkAsHandler('approved')}>Mark as Approved</Styled.Item>
			<Styled.Item onClick={() => onMarkAsHandler('rejected')}>Mark as Rejected</Styled.Item>
			<Styled.Item onClick={() => onMarkAsHandler('published')}>Mark as Published</Styled.Item>
			<Styled.Item onClick={() => onMarkAsHandler('unpublished')}>Mark as Unpublished</Styled.Item>
			<Styled.Item onClick={() => onMarkAsHandler('withdrawlapproval')}>Withdrawl Approval</Styled.Item>
			<Styled.Item onClick={() => onMarkAsHandler('withdrawlrejection')}>Withdrawl Rejection</Styled.Item>
			<Styled.Item onClick={onEmailClick}>Send</Styled.Item>
			<Styled.Item onClick={onDeleteItemHandler}>Delete</Styled.Item>
			<Styled.Item onClick={onDownloadExcelFileHandler}>Export to Excel</Styled.Item>
			<Styled.Item onClick={onClickDownloadCSVButtonHandler}>Export to CSV</Styled.Item>
			<Styled.Item onClick={onClickDownloadCSVButtonHandler}>Export to PDF</Styled.Item>
		</Styled.Wrapper>
	);
};
