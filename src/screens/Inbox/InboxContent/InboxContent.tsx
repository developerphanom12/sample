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
    isVisited,
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
    receipts,
    isFetchingReceipts,
  } = props;

  return (
    <>
      <Styled.Wrapper>
        {!isFetchingReceipts && (
          <HeaderPanel
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
          />
        )}
        {isContentLoading ? (
          <Styled.LoaderWrapper>
            <LoaderComponent theme="preview" />
          </Styled.LoaderWrapper>
        ) : !isContentLoading && !isFetchingReceipts ? (
          <>
            <TableInboxAdmin
              onCheckedItemHandler={onCheckedItemHandler}
              onCheckedAllItemsHandler={onCheckedAllItemsHandler}
              onCheckedPaidHandler={onCheckedPaidHandler}
              onCheckedPublishMockFuncHandler={onCheckedPublishMockFuncHandler}
              isVisited={isVisited}
              receiptList={receipts}
              isAllChecked={isAllChecked}
              dateFormat={dateFormat}
              isReceipts={!!receipts?.length}
            />
            {receipts.length ? (
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
          </>
        ) : null}
      </Styled.Wrapper>
    </>
  );
};
