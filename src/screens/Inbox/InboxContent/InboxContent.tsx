import { FC } from 'react';

import { HeaderPanel } from 'components/HeaderPanel';
import { LoaderComponent } from 'components/Loader';
import { PaginationPanel } from 'components/PaginationPanel';
import { TableInboxAdmin } from 'components/Table/TableInboxAdmin';

import { InboxContentStyles as Styled } from './InboxContent.style';

export const InboxContent: FC<IInboxContent> = (props) => {
  const {
    dateValue,
    formattedDate,
    isDatePickerOpen,
    isDownloadButtonDisabled,
    onChangeDate,
    onChangeSearchValueHandler,
    onChangeStatusValueHandler,
    onClickDownloadCSVButtonHandler,
    onClickOutsideDatePickerHandler,
    onDeleteReceiptHandler,
    onMarkAsPaidButtonHandler,
    onDownloadExcelFileHandler,
    onEmailClick,
    onSelectFilesHandler,
    searchValue,
    setIsDatePickerOpen,
    showActions,
    statusValue,
    onActionsClick,
    onActionsClose,
    isContentLoading,
    dateFormat,
    isAllChecked,
    onCheckedPaidHandler,
    onCheckedPublishMockFuncHandler,
    onCheckedAllItemsHandler,
    onCheckedItemHandler,
    currentPage,
    inputPaginationValue,
    onBackwardClick,
    onChangeInputValue,
    onChangeReceiptsPerPage,
    onForwardClick,
    onEnterGoToClick,
    onGoToClick,
    pages,
    receiptsPerPage,
    onChangePage,
    isFetchingReceipts,
    datePickerRef,
    receiptList,
    sortField,
    sortOrder,
    requestSort,
  } = props;

  return (
    <Styled.Wrapper>
      {!isFetchingReceipts && (
        <HeaderPanel
          datePickerRef={datePickerRef}
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
          onDeleteItemHandler={onDeleteReceiptHandler}
          onMarkAsPaidButtonHandler={onMarkAsPaidButtonHandler}
        />
      )}
      <Styled.TableWrapper>
        {isContentLoading && (
          <Styled.LoaderWrapper>
            <LoaderComponent theme="preview" />
          </Styled.LoaderWrapper>
        )}
        <TableInboxAdmin
          onCheckedItemHandler={onCheckedItemHandler}
          onCheckedAllItemsHandler={onCheckedAllItemsHandler}
          onCheckedPaidHandler={onCheckedPaidHandler}
          onCheckedPublishMockFuncHandler={onCheckedPublishMockFuncHandler}
          receiptList={receiptList}
          isAllChecked={isAllChecked}
          dateFormat={dateFormat}
          sortField={sortField}
          sortOrder={sortOrder}
          requestSort={requestSort}
        />
        {receiptList.length ? (
          <PaginationPanel
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
          />
        ) : null}
      </Styled.TableWrapper>
    </Styled.Wrapper>
  );
};
