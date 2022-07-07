import { FC, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { EmptyData } from 'components/EmptyData';
import { LoaderComponent } from 'components/Loader';

import { InboxStyles as Styled } from './Inbox.style';
import { useInboxState } from './Inbox.state';
import { InboxContent } from './InboxContent';
import { ActionMenuContent } from './ActionMenuContent';

import { EMPTY_DATA_STRINGS as Strings } from 'constants/strings';

export const Inbox: FC = () => {
  const {
    onSelectFilesHandler,
    onFetchReceiptsHandler,
    onChangeIsVisitedHandler,
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
    onEmailModalWindowToggle,
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
    onClickOutsideDatePickerHandler,
    onChangePagesAmount,
    onDownloadExcelFileHandler,
    onDeleteReceiptHandler,
    onMarkAsPaidButtonHandler,
  } = useInboxState();

  useEffect(() => {
    onFetchReceiptsHandler({
      search: debouncedValue.toLowerCase().trim().replace(/\s+/g, ''),
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

  return (
    <>
      <ActionMenuContent
        csvLink={csvLink}
        csvData={csvData}
        excelRef={excelRef}
        excelUrl={excelUrl}
        onCloseModalWindowHandler={onEmailModalWindowToggle}
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
      ) : location.pathname === '/inbox' && totalReceiptCount ? (
        <>
          {!isFetchingReceipts && isContentVisible && !isFetchingData ? (
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
              receipts={receipts}
              isFetchingReceipts={isFetchingReceipts}
            />
          ) : null}
        </>
      ) : !isFetchingReceipts &&
        !isFetchingData &&
        !totalReceiptCount &&
        !receipts.length ? (
        <EmptyData
          isUploadFile={true}
          buttonText={Strings.buttonText}
          firstSubtitle={Strings.firstSubtitle}
          secondSubtitle={Strings.secondSubtitle}
          title={Strings.title}
          onAddReceiptHandler={onSelectFilesHandler}
        />
      ) : null}
    </>
  );
};
