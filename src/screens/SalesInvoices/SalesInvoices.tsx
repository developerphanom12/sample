import { FC, useEffect } from 'react';

import { SalesInvoicesTable } from 'components/Table/SalesInvoices';

import { ActionsPanel } from './ActionsPanel';
import { useSalesInvoicesState } from './SalesInvoices.state';
import { SalesInvoicesStyles as Styled } from './SalesInvoices.styles';

export const SalesInvoices: FC = () => {
  const {
    sortOrder,
    sortField,
    requestSort,
    onCheckedPublishMockFuncHandler,
    onCheckedPaidHandler,
    onCheckedApproveHandler,
    checkedIds,
    onDeleteInvoiceHandler,
    datePickerRef,
    excelRef,
    excelUrl,
    csvData,
    isSentSuccessPopup,
    csvLink,
    currentPage,
    dataToSend,
    dateEnd,
    dateStart,
    dateValue,
    debouncedValue,
    fetchParams,
    formattedDate,
    isInputDate,
    inputPaginationValue,
    isCompanyChanged,
    isContentLoading,
    isDatePickerOpen,
    isDownloadButtonDisabled,
    isEmailModalWindowOpen,
    isLoading,
    location,
    onActionsClick,
    onActionsClose,
    onBackwardClick,
    onChangeDate,
    onChangeInputValue,
    onChangePage,
    onChangePagesAmount,
    onChangeReceiptsPerPage,
    onChangeSearchValueHandler,
    onChangeStatusValueHandler,
    onChangeDateFilterValueHandler,
    onCheckedAllItemsHandler,
    onCheckedItemHandler,
    onClickDownloadCSVButtonHandler,
    onClickOutsideDatePickerHandler,
    onCloseModalWindowHandler,
    onDownloadExcelFileHandler,
    onEmailClick,
    onEmailModalWindowToggle,
    onEnterGoToClick,
    onForwardClick,
    onGoToClick,
    onMarkAsPaidButtonHandler,
    onPostEmailHandler,
    onSelectSalesFilesHandler,
    pages,
    receiptsPerPage,
    searchValue,
    setCurrentPage,
    setIsDatePickerOpen,
    setIsSentSuccessPopup,
    showActions,
    sortedInvoices,
    statusValue,
    dateFilterValue,
    totalCount,
    invoice_formik,
    onMarkAsHandler,

    onFetchSalesInvoicesHandler,
    active_account,
    count,
    isFetchingInvoice
  } = useSalesInvoicesState();

  useEffect(() => {
    onFetchSalesInvoicesHandler({
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

  const isEmptyScreen = !isFetchingInvoice && !totalCount;

  return (
    <Styled.Wrapper>
      <ActionsPanel
        datePickerRef={datePickerRef}
        onMarkAsPaidButtonHandler={onMarkAsPaidButtonHandler}
        onMarkAsHandler={onMarkAsHandler}
        onClickDownloadCSVButtonHandler={onClickDownloadCSVButtonHandler}
        onSelectSalesFilesHandler={onSelectSalesFilesHandler}
        onChangeStatusValueHandler={onChangeStatusValueHandler}
        onChangeDateFilterValueHandler={onChangeDateFilterValueHandler}
        statusValue={statusValue}
        dateFilterValue={dateFilterValue}
        onChangeSearchValueHandler={onChangeSearchValueHandler}
        searchValue={searchValue}
        onChangeDate={onChangeDate}
        onClickOutsideDatePickerHandler={onClickOutsideDatePickerHandler}
        isDatePickerOpen={isDatePickerOpen}
        dateValue={dateValue}
        setIsDatePickerOpen={setIsDatePickerOpen}
        formattedDate={formattedDate}
        isInputDate={isInputDate}
        onActionsClose={onActionsClose}
        onEmailClick={onEmailClick}
        showActions={showActions}
        isDownloadButtonDisabled={isDownloadButtonDisabled}
        onDownloadExcelFileHandler={onDownloadExcelFileHandler}
        csvLink={csvLink}
        csvData={csvData}
        excelRef={excelRef}
        excelUrl={excelUrl}
        isSentSuccessPopup={isSentSuccessPopup}
        closeSuccesPopupHandler={setIsSentSuccessPopup}
        onCloseModalWindowHandler={onCloseModalWindowHandler}
        isModalWindowOpen={false}
        formikProps={invoice_formik.getFieldProps}
        formikMeta={invoice_formik.getFieldMeta}
        isValid={false}
        isLoading={isLoading}
        checkedIds={checkedIds}
        onDeleteItemHandler={onDeleteInvoiceHandler}
        onFormHandleSubmit={invoice_formik.handleSubmit}
        primaryAction="uplaod-invoice"
      />
      <SalesInvoicesTable
        onCheckedPublishMockFuncHandler={onCheckedPublishMockFuncHandler}
        invoicesList={sortedInvoices}
        isAllChecked={false}
        onCheckedPaidHandler={onCheckedPaidHandler}
        onCheckedApproveHandler={onCheckedApproveHandler}
        dateFormat={''}
        sortField={sortField}
        sortOrder={sortOrder}
        requestSort={requestSort}
      />
    </Styled.Wrapper>
  );
};
