import { FC } from 'react';

import { CustomDatePicker } from 'components/CustomDatePicker';

import { Button } from '../Button';
import { FileUploadButton } from '../FileUploadButton';
import { Icon } from '../Icons/Icons';
import { Input } from '../Input';
import { HeaderPanelStyles as Styled } from './HeaderPanel.style';
import { CustomSelect } from '../CustomSelect';
import { ThreeDotsMenu } from '../ThreeDotsMenu';

import { statusFilterOptions } from 'screens/Inbox/inbox.constants';

import { useOutsideClick } from 'hooks/useOutsideClick';

export const HeaderPanel: FC<IHeaderPanelProps> = (props) => {
  const {
    onSelectFilesHandler,
    onChangeStatusValueHandler,
    onChangeSearchValueHandler,
    onChangeDate,
    onClickOutsideDatePickerHandler,
    setIsDatePickerOpen,
    formattedDate,
    dateValue,
    isDatePickerOpen,
    searchValue,
    statusValue,
    onActionsClick,
    onActionsClose,
    onEmailClick,
    showActions,
    onClickDownloadCSVButtonHandler,
    isDownloadButtonDisabled,
    onDownloadExcelFileHandler,
    onDeleteReceiptHandler,
    onMarkAsPaidButtonHandler,
    datePickerRef,
  } = props;
  const ref = useOutsideClick(onActionsClose);
  return (
    <Styled.HeaderPanelWrapper>
      <Styled.SearchWrapper>
        <Styled.FilterWrapper>
          <Styled.SearchInputWrapper>
            <Input
              value={searchValue}
              onChangeValue={onChangeSearchValueHandler}
              isHiddenLabel
              isNoMargin
              inputTheme="search"
              placeHolder="Search here..."
            />
            <Styled.IconWrapper>
              <Icon type="searchIcon" />
            </Styled.IconWrapper>
          </Styled.SearchInputWrapper>
          <Styled.DatePickerWrapper>
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
          </Styled.DatePickerWrapper>
        </Styled.FilterWrapper>
        <Styled.SelectWrapper>
          <CustomSelect
            height="45"
            onChangeValueHandler={onChangeStatusValueHandler}
            options={statusFilterOptions}
            value={statusValue}
          />
        </Styled.SelectWrapper>
      </Styled.SearchWrapper>
      <Styled.ButtonsWrapper>
        <Styled.ButtonActionsWrapper ref={ref}>
          <Button
            width="actions"
            themedButton="secondary"
            onClick={onActionsClick}
            isDisabled={isDownloadButtonDisabled}
          />
          {!!showActions && (
            <ThreeDotsMenu
              onClickDownloadCSVButtonHandler={onClickDownloadCSVButtonHandler}
              onEmailClick={onEmailClick}
              onDownloadExcelFileHandler={onDownloadExcelFileHandler}
              onDeleteReceiptHandler={onDeleteReceiptHandler}
              onMarkAsPaidButtonHandler={onMarkAsPaidButtonHandler}
            />
          )}
        </Styled.ButtonActionsWrapper>
        <FileUploadButton onChangeFiles={onSelectFilesHandler} />
      </Styled.ButtonsWrapper>
    </Styled.HeaderPanelWrapper>
  );
};
