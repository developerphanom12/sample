import { FC, memo, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { EmptyData } from 'components/EmptyData';
import { LoaderComponent } from 'components/Loader';

import { InboxStyles as Styled } from './Inbox.style';
import { useInboxState } from './Inbox.state';
import { InboxContent } from './InboxContent';
import { ActionMenuContent } from './ActionMenuContent';

import { EMPTY_DATA_STRINGS as Strings } from 'constants/strings';

export const Inbox: FC = memo(() => {
  const {
    onSelectFilesHandler,
    onFetchReceiptsHandler,
    onChangeStatusValueHandler,
    onChangeSearchValueHandler,
    onChangeDate,
    isDatePickerOpen,
    dateValue,
    searchValue,
    statusValue,
    formattedDate,
    setIsDatePickerOpen,
    isEmailModalWindowOpen,
    onEmailClick,
    formik,
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
    onCheckedPublishMockFuncHandler,
    receiptsPerPage,
    inputPaginationValue,
    currentPage,
    pages,
    checkedIds,
    showActions,
    isAllChecked,
    csvLink,
    csvData,
    company,
    excelRef,
    excelUrl,
    isDownloadButtonDisabled,
    isLoading,
    isContentLoading,
    debouncedValue,
    isFetchingReceipts,
    location,
    datePickerRef,
    active_account,
    isSentSuccessPopup,
    setIsSentSuccessPopup,
    onCloseModalWindowHandler,
    onClickOutsideDatePickerHandler,
    onChangePagesAmount,
    onDownloadExcelFileHandler,
    onDeleteReceiptHandler,
    onMarkAsPaidButtonHandler,
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
      <ActionMenuContent
        isSentSuccessPopup={isSentSuccessPopup}
        closeSuccesPopupHandler={setIsSentSuccessPopup}
        csvLink={csvLink}
        csvData={csvData}
        excelRef={excelRef}
        excelUrl={excelUrl}
        onCloseModalWindowHandler={onCloseModalWindowHandler}
        isModalWindowOpen={isEmailModalWindowOpen}
        onFormHandleSubmit={formik.handleSubmit}
        formikProps={formik.getFieldProps}
        formikMeta={formik.getFieldMeta}
        isValid={formik.isValid && formik.dirty}
        isLoading={isLoading}
        checkedIds={checkedIds}
      />
      {location.pathname !== '/inbox' ? (
        <Outlet />
      ) : isFetchingReceipts ? (
        <Styled.LoaderWrapper>
          <LoaderComponent theme="preview" />
        </Styled.LoaderWrapper>
      ) : totalCount ? (
        <>
          {!isFetchingReceipts ? (
            <InboxContent
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
              onSelectFilesHandler={onSelectFilesHandler}
              onChangeStatusValueHandler={onChangeStatusValueHandler}
              onChangeSearchValueHandler={onChangeSearchValueHandler}
              searchValue={searchValue}
              onChangeDate={onChangeDate}
              onClickOutsideDatePickerHandler={onClickOutsideDatePickerHandler}
              isDatePickerOpen={isDatePickerOpen}
              dateValue={dateValue}
              setIsDatePickerOpen={setIsDatePickerOpen}
              formattedDate={formattedDate}
              showActions={showActions}
              onActionsClick={onActionsClick}
              onActionsClose={onActionsClose}
              onClickDownloadCSVButtonHandler={onClickDownloadCSVButtonHandler}
              onEmailClick={onEmailClick}
              isDownloadButtonDisabled={isDownloadButtonDisabled}
              onDownloadExcelFileHandler={onDownloadExcelFileHandler}
              onDeleteReceiptHandler={onDeleteReceiptHandler}
              onMarkAsPaidButtonHandler={onMarkAsPaidButtonHandler}
              isContentLoading={isContentLoading}
              onCheckedItemHandler={onCheckedItemHandler}
              onCheckedAllItemsHandler={onCheckedAllItemsHandler}
              onCheckedPaidHandler={onCheckedPaidHandler}
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
