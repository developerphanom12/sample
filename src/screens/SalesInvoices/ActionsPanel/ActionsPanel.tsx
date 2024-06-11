import { FC } from 'react';

import { ActionsMenu } from 'components/ActionsMenu';
import { HeaderPanel } from 'components/HeaderPanel';

export const ActionsPanel: FC<IHeaderPanelProps & IActionMenuContentProps> = (
  props
) => {
  const {
    datePickerRef,
    dateValue,
    formattedDate,
    isDatePickerOpen,
    isDownloadButtonDisabled,
    onActionsClose,
    onChangeDate,
    onChangeSearchValueHandler,
    onChangeStatusValueHandler,
    onChangeDateFilterValueHandler,
    onClickDownloadCSVButtonHandler,
    onClickOutsideDatePickerHandler,
    onDeleteItemHandler,
    onDownloadExcelFileHandler,
    onEmailClick,
    onMarkAsPaidButtonHandler,
    onSelectFilesHandler,
    searchValue,
    setIsDatePickerOpen,
    showActions,
    statusValue,
    dateFilterValue,
    onActionsClick,
    checkedIds,
    closeSuccesPopupHandler,
    csvData,
    csvLink,
    excelRef,
    excelUrl,
    formikMeta,
    formikProps,
    isLoading,
    isModalWindowOpen,
    isSentSuccessPopup,
    isValid,
    onCloseModalWindowHandler,
    onFormHandleSubmit,
  } = props;
  return (
    <>
      <HeaderPanel
        datePickerRef={datePickerRef}
        onDeleteItemHandler={onDeleteItemHandler}
        onMarkAsPaidButtonHandler={onMarkAsPaidButtonHandler}
        onClickDownloadCSVButtonHandler={onClickDownloadCSVButtonHandler}
        onSelectFilesHandler={onSelectFilesHandler}
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
        onActionsClose={onActionsClose}
        onEmailClick={onEmailClick}
        showActions={showActions}
        isDownloadButtonDisabled={isDownloadButtonDisabled}
        onActionsClick={onActionsClick}
        onDownloadExcelFileHandler={onDownloadExcelFileHandler}
      />
      <ActionsMenu
        csvLink={csvLink}
        csvData={csvData}
        excelRef={excelRef}
        excelUrl={excelUrl}
        isSentSuccessPopup={isSentSuccessPopup}
        closeSuccesPopupHandler={closeSuccesPopupHandler}
        onCloseModalWindowHandler={onCloseModalWindowHandler}
        isModalWindowOpen={isModalWindowOpen}
        onFormHandleSubmit={onFormHandleSubmit}
        formikProps={formikProps}
        formikMeta={formikMeta}
        isValid={isValid}
        isLoading={isLoading}
        checkedIds={checkedIds}
      />
    </>
  );
};
