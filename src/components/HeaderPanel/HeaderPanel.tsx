import { FC } from "react";

import { CustomDatePicker } from "components/CustomDatePicker";
import { DateRangePicker } from "components/CustomDateRangePicker";

import { useOutsideClick } from "hooks/useOutsideClick";

import { Button } from "../Button";
import { FileUploadButton } from "../FileUploadButton";
import { Icon } from "../Icons/Icons";
import { Input } from "../Input";
import { HeaderPanelStyles as Styled } from "./HeaderPanel.style";
import { CustomSelect } from "../CustomSelect";
import { ThreeDotsMenu } from "../ThreeDotsMenu";

import { statusFilterOptions, dateFilterOptions } from "screens/Inbox/inbox.constants";

export const HeaderPanel: FC<IHeaderPanelProps> = (props) => {
	const {
		dot3ExpReport,
		onSelectFilesHandler,
		onChangeStatusValueHandler,
		onChangeDateFilterValueHandler,
		onChangeSearchValueHandler,
		onChangeDate,
		onClickOutsideDatePickerHandler,
		setIsDatePickerOpen,
		formattedDate,
		isInputDate,
		dateValue,
		isDatePickerOpen,
		searchValue,
		statusValue,
		dateFilterValue,
		onActionsClick,
		onActionsClose,
		onEmailClick,
		showActions,
		onClickDownloadCSVButtonHandler,
		isDownloadButtonDisabled,
		onDownloadExcelFileHandler,
		onDeleteItemHandler,
		// onMarkAsPaidButtonHandler,
		onMarkAsHandler,
		datePickerRef,
	} = props;
	const ref = useOutsideClick(onActionsClose);
	return (
		<Styled.HeaderPanelWrapper>
			<Styled.PannelLeftWrapper>
				<Styled.SearchInputWrapper>
					<Input value={searchValue} onChangeValue={onChangeSearchValueHandler} isHiddenLabel isNoMargin inputTheme="search" placeHolder="Search" />
					<Styled.IconWrapper>
						<Icon type="smallSearchIcon" />
					</Styled.IconWrapper>
				</Styled.SearchInputWrapper>
				<Styled.DateFilterBatchWrapper>
					<Styled.DateFilterSelector>
						<CustomSelect height="70vh" width="210px" onChangeValueHandler={onChangeDateFilterValueHandler} options={dateFilterOptions} value={dateFilterValue} paginate />
					</Styled.DateFilterSelector>
					{dateFilterValue?.value === "range" || dateFilterValue?.value === "customdate" ? <Styled.connector></Styled.connector> : null}
					<Styled.DatePickerWrapper>
						{dateFilterValue?.value === "range" ? (
							<DateRangePicker
								isInputDate={isInputDate}
								isDatePickerOpen={isDatePickerOpen}
								onClickOutsideDatePickerHandler={onClickOutsideDatePickerHandler}
								onChange={onChangeDate}
								onDatePickerClickHandler={setIsDatePickerOpen}
								selectedDate={dateValue}
								formattedDate={formattedDate}
								datePickerRef={datePickerRef}
							/>
						) : dateFilterValue?.value === "customdate" ? (
							<CustomDatePicker
								isInputDate={false}
								isDatePickerOpen={isDatePickerOpen}
								onClickOutsideDatePickerHandler={onClickOutsideDatePickerHandler}
								onChange={onChangeDate}
								onDatePickerClickHandler={setIsDatePickerOpen}
								selectedDate={dateValue}
								formattedDate={formattedDate}
								datePickerRef={datePickerRef}
							/>
						) : null}
					</Styled.DatePickerWrapper>
				</Styled.DateFilterBatchWrapper>
				<Styled.SelectWrapper>
					<CustomSelect height="45" onChangeValueHandler={onChangeStatusValueHandler} options={statusFilterOptions} value={statusValue} paginate />
				</Styled.SelectWrapper>
			</Styled.PannelLeftWrapper>
			<Styled.ButtonsWrapper>
				<Styled.ButtonActionsWrapper ref={ref}>
					<Button width="actions" themedButton="threeDots" onClick={onActionsClick} isDisabled={isDownloadButtonDisabled} />
					{!!showActions && (
						<ThreeDotsMenu dot3ExpReport={dot3ExpReport} onClickDownloadCSVButtonHandler={onClickDownloadCSVButtonHandler} onEmailClick={onEmailClick} onDownloadExcelFileHandler={onDownloadExcelFileHandler} onDeleteItemHandler={onDeleteItemHandler} onMarkAsHandler={onMarkAsHandler} />
					)}
				</Styled.ButtonActionsWrapper>
				<FileUploadButton onChangeFiles={onSelectFilesHandler} />
			</Styled.ButtonsWrapper>
		</Styled.HeaderPanelWrapper>
	);
};
