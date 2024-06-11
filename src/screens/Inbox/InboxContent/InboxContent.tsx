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
    onChangeDateFilterValueHandler,
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
    dateFilterValue,
    onActionsClick,
    onActionsClose,
    isContentLoading,
    dateFormat,
    isAllChecked,
    onCheckedPaidHandler,
    onCheckedApproveHandler,
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
          dot3ExpReport={true}
          datePickerRef={datePickerRef}
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
          onCheckedApproveHandler={onCheckedApproveHandler}
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
