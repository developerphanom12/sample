import { FC } from 'react';

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
    inputPaginationValue,
    isCompanyChanged,
    isContentLoading,
    isDatePickerOpen,
    isDownloadButtonDisabled,
    isEmailModalWindowOpen,
    isFetchingData,
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
    onSelectFilesHandler,
    pages,
    receiptsPerPage,
    searchValue,
    setCurrentPage,
    setIsDatePickerOpen,
    setIsSentSuccessPopup,
    showActions,
    sortedReceipts,
    statusValue,
    totalCount,
    invoice_formik,
  } = useSalesInvoicesState();
  return (
    <Styled.Wrapper>
      <ActionsPanel
        datePickerRef={datePickerRef}
        onMarkAsPaidButtonHandler={onMarkAsPaidButtonHandler}
        onClickDownloadCSVButtonHandler={onClickDownloadCSVButtonHandler}
        onSelectFilesHandler={onSelectFilesHandler}
        onChangeStatusValueHandler={onChangeStatusValueHandler}
        statusValue={statusValue}
        onChangeSearchValueHandler={onChangeSearchValueHandler}
        searchValue={searchValue}
        onChangeDate={onChangeDate}
        onClickOutsideDatePickerHandler={onClickOutsideDatePickerHandler}
        isDatePickerOpen={isDatePickerOpen}
        dateValue={dateValue}
        setIsDatePickerOpen={setIsDatePickerOpen}
        formattedDate={formattedDate}
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
      />
      <SalesInvoicesTable
        onCheckedPublishMockFuncHandler={onCheckedPublishMockFuncHandler}
        invoicesList={[]}
        isAllChecked={false}
        onCheckedPaidHandler={onCheckedPaidHandler}
        dateFormat={''}
        sortField={sortField}
        sortOrder={sortOrder}
        requestSort={requestSort}
      />
    </Styled.Wrapper>
  );
};
