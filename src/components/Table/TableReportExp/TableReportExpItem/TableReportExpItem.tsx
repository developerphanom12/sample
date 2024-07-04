import React from "react";
import { format } from "date-fns";

import { getCorrectCustomId } from "services/utils";

import { CheckboxItem } from "components/Checkbox/Checkbox";
import { StatusLabel } from "components/StatusLabel/StatusLabel";

import { TableExpenseItemStyles as Styled } from "./TableExpenseItem.style";
import { useTableExpenseState } from "./TableExpenseItem.state";
import { IReportTableProps, IReportList, IExpenseReport } from "../../../../screens/ExpenseReport/types/expenseReport.types";

export const TableReportExpItem: React.FC<IExpenseReport> = (props) => {
	const { reportIndex, reportName, reportId, date, total, tax, isChecked } = props;

	// const { onReceiptDetailsClickHandler } = useTableExpenseState({
	//   receiptId,
	//   receiptIndex,
	// });

	return (
		<Styled.Item>
			{/* <Styled.Checkbox>
				<CheckboxItem name={reportId} isChecked={isChecked} onChange={onCheckedItemHandler} />
			</Styled.Checkbox>
				<Styled.ValueWrapper>{supplier || "---"}</Styled.ValueWrapper>
			<Styled.View id={reportId} onClick={onReceiptDetailsClickHandler}>
				<Styled.Link>{getCorrectCustomId(customId)}</Styled.Link>
			</Styled.View>
			<Styled.Selector>{!!date ? format(new Date(date), dateFormat) : "---"}</Styled.Selector>
			<Styled.Selector>
			</Styled.Selector>
			<Styled.Selector>
				<Styled.ValueWrapper>{supplierAccount || "---"}</Styled.ValueWrapper>
			</Styled.Selector>
			<Styled.Selector>
				<Styled.ValueWrapper>{category || "---"}</Styled.ValueWrapper>
			</Styled.Selector>
			<Styled.Selector>
				<Styled.ValueWrapper>{vatCode || "---"}</Styled.ValueWrapper>
			</Styled.Selector>
			<Styled.Selector>{currency || "---"}</Styled.Selector>
			<Styled.Selector>
				<Styled.ValueWrapper>{net || "00.00"}</Styled.ValueWrapper>
			</Styled.Selector>
			<Styled.Selector>
				<Styled.ValueWrapper>{tax || "00.00"}</Styled.ValueWrapper>
			</Styled.Selector>
			<Styled.Selector>
				<Styled.ValueWrapper>{total || "00.00"}</Styled.ValueWrapper>
			</Styled.Selector>
			<Styled.Checkbox isBorder isHidden={true}>
				<CheckboxItem isChecked={publishStatus} onChange={onCheckedPublishMockFuncHandler} name={receiptId} />
			</Styled.Checkbox>
			<Styled.Checkbox isBorder>
				<CheckboxItem isChecked={paymentStatus} onChange={onCheckedPaidHandler} name={receiptId} />
			</Styled.Checkbox>
			<Styled.Checkbox isBorder>
				<CheckboxItem
					isChecked={approveStatus} //aproved
					onChange={onCheckedApproveHandler}
					name={receiptId}
				/>
			</Styled.Checkbox>
			<Styled.Checkbox isBorder>
				<CheckboxItem
					isChecked={publishStatus} //published
					onChange={onCheckedPublishMockFuncHandler}
					name={receiptId}
				/>
			</Styled.Checkbox>
			<Styled.Status>
				<StatusLabel status={status as Statuses} />
			</Styled.Status> */}
		</Styled.Item>
	);
};
