import { FC, useEffect, memo } from 'react';

import { EmptyData } from 'components/EmptyData';
import { LoaderComponent } from 'components/Loader';

import { ExpenseStyles as Styled } from './ExpenseReport.style';

import { useInboxState } from 'screens/Inbox/Inbox.state';
import { Outlet } from 'react-router';
import { EMPTY_DATA_STRINGS as Strings } from 'constants/strings';
import { ExpenseContent } from './ExpenseContent';

export const ExpenseReport: FC = memo(() => {
  const {
    onSelectFilesHandler,
    onFetchReceiptsHandler,
    onChangeStatusValueHandler,
    onChangeDateFilterValueHandler,
    onChangeSearchValueHandler,
    onChangeDate,
    isDatePickerOpen,
    dateValue,
    searchValue,
    statusValue,
    dateFilterValue,
    formattedDate,
    isInputDate,
    setIsDatePickerOpen,
    onEmailClick,
    onChangeReceiptsPerPage,
    onChangeInputValue,
    onEnterGoToClick,
    onGoToClick,
    onForwardClick,
    onBackwardClick,
    onActionsClick,
    onActionsClose,
    onChangePage,
    onCheckedItemHandler,
    onCheckedAllItemsHandler,
    onClickDownloadCSVButtonHandler,
    onCheckedPaidHandler,
    onCheckedApproveHandler,
    onCheckedPublishMockFuncHandler,
    receiptsPerPage,
    inputPaginationValue,
    currentPage,
    pages,
    showActions,
    isAllChecked,
    company,
    isDownloadButtonDisabled,
    isContentLoading,
    debouncedValue,
    isFetchingReceipts,
    location,
    datePickerRef,
    active_account,
    onClickOutsideDatePickerHandler,
    onChangePagesAmount,
    onDownloadExcelFileHandler,
    onDeleteReceiptHandler,
    onMarkAsHandler,
    sortField,
    sortOrder,
    sortedReceipts,
    fetchParams,
    totalCount,
    isCompanyChanged,
    requestSort,
    setCurrentPage,
    count,
  } = useInboxState();

  useEffect(() => {
    onFetchReceiptsHandler({
      ...fetchParams,
      skip: 0,
    });
    if (debouncedValue || isCompanyChanged) {
      setCurrentPage(0);
    }
  }, [debouncedValue, active_account]);

  useEffect(() => {
    if (count) {
      onChangePagesAmount(Number(receiptsPerPage.value), count);
    }
  }, [receiptsPerPage, count, active_account]);

  const isEmptyScreen = !isFetchingReceipts && !totalCount;


  return (
    <>
      {location.pathname !== '/expense-report' ? (
        <Outlet />
      ) : isFetchingReceipts ? (
        <Styled.LoaderWrapper>
          <LoaderComponent theme="preview" />
        </Styled.LoaderWrapper>
      ) : totalCount ? (
        <>
          {!isFetchingReceipts ? (
            <ExpenseContent
              datePickerRef={datePickerRef}
              pages={pages}
              currentPage={currentPage}
              onChangeReceiptsPerPage={onChangeReceiptsPerPage}
              onChangeInputValue={onChangeInputValue}
              inputPaginationValue={inputPaginationValue}
              receiptsPerPage={receiptsPerPage}
              onChangePage={onChangePage}
              onEnterGoToClick={onEnterGoToClick}
              onGoToClick={onGoToClick}
              onForwardClick={onForwardClick}
              onBackwardClick={onBackwardClick}
              statusValue={statusValue}
              dateFilterValue={dateFilterValue}
              onSelectFilesHandler={onSelectFilesHandler}
              onChangeStatusValueHandler={onChangeStatusValueHandler}
              onChangeDateFilterValueHandler={onChangeDateFilterValueHandler}
              onChangeSearchValueHandler={onChangeSearchValueHandler}
              searchValue={searchValue}
              onChangeDate={onChangeDate}
              onClickOutsideDatePickerHandler={onClickOutsideDatePickerHandler}
              isDatePickerOpen={isDatePickerOpen}
              dateValue={dateValue}
              setIsDatePickerOpen={setIsDatePickerOpen}
              formattedDate={formattedDate}
              isInputDate={isInputDate}
              showActions={showActions}
              onActionsClick={onActionsClick}
              onActionsClose={onActionsClose}
              onClickDownloadCSVButtonHandler={onClickDownloadCSVButtonHandler}
              onEmailClick={onEmailClick}
              isDownloadButtonDisabled={isDownloadButtonDisabled}
              onDownloadExcelFileHandler={onDownloadExcelFileHandler}
              onDeleteReceiptHandler={onDeleteReceiptHandler}
              onMarkAsHandler={onMarkAsHandler}
              isContentLoading={isContentLoading}
              onCheckedItemHandler={onCheckedItemHandler}
              onCheckedAllItemsHandler={onCheckedAllItemsHandler}
              onCheckedPaidHandler={onCheckedPaidHandler}
              onCheckedApproveHandler={onCheckedApproveHandler}
              onCheckedPublishMockFuncHandler={onCheckedPublishMockFuncHandler}
              receiptList={sortedReceipts}
              requestSort={requestSort}
              isAllChecked={isAllChecked}
              dateFormat={company.date_format}
              isFetchingReceipts={isFetchingReceipts}
              sortField={sortField}
              sortOrder={sortOrder}
            />
          ) : null}
        </>
      ) : isEmptyScreen ? (
        <EmptyData
          isUploadFile={true}
          buttonText={Strings.buttonText}
          firstSubtitle={Strings.firstSubtitle}
          secondSubtitle={Strings.secondSubtitle}
          title={Strings.title}
          isRoundedButton
          onAddReceiptHandler={onSelectFilesHandler}
        />
      ) : null}
    </>
  );
});
