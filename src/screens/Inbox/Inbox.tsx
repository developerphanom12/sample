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
    totalReceiptCount,
    isVisited,
    statusValue,
    formattedDate,
    setIsDatePickerOpen,
    receipts,
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
    isFetchingData,
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
    isContentVisible,
    dateEnd,
    dateStart,
    location,
    count,
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
  } = useInboxState();

  useEffect(() => {
    onFetchReceiptsHandler({
      search: debouncedValue,
      skip: 0,
      take: Number(receiptsPerPage.value),
      date_start: dateStart || '',
      date_end: dateEnd || '',
      status: statusValue.value === 'all' ? '' : statusValue.value,
    });
  }, [debouncedValue, isFetchingData, active_account]);

  useEffect(() => {
    if (!count) return;
    onChangePagesAmount(Number(receiptsPerPage.value), count);
  }, [receiptsPerPage, count, isFetchingData]);

  const isInboxContent =
    !isFetchingReceipts && isContentVisible && !isFetchingData;

  const isEmptyScreen =
    !isFetchingReceipts &&
    !isFetchingData &&
    !totalReceiptCount &&
    !receipts.length;
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
      ) : isFetchingReceipts || isFetchingData ? (
        <Styled.LoaderWrapper>
          <LoaderComponent theme="preview" />
        </Styled.LoaderWrapper>
      ) : totalReceiptCount ? (
        <>
          {isInboxContent ? (
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
              isVisited={isVisited}
              receiptList={receipts}
              isAllChecked={isAllChecked}
              dateFormat={company.date_format}
              isFetchingReceipts={isFetchingReceipts}
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
