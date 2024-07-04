import { FC } from 'react';

import { LoaderComponent } from 'components/Loader';
import { PaginationPanel } from 'components/PaginationPanel';

import { InboxContentStyles as Styled } from 'screens/Inbox/InboxContent/InboxContent.style';
import { HeaderPanelMaster } from 'components/HeaderPanelMaster';
import { TableReportExpense } from 'components/Table/TableReportExp/TableReportExpense';

export const ExpenseContent: FC<any> = (props) => {
  const {
    userRole,
    onBlurHandler,
    onFocusSearchHandler,
    onChangeSearchValueHandler,
    onAddClickButtonHandler,
    searchValue,
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
    isFetchingReports,
    datePickerRef,
    sortedReportList,
    sortField,
    sortOrder,
    requestSort,
  } = props;

  return (
    <Styled.Wrapper>
        <HeaderPanelMaster
          isGuard
          userRole={userRole}
          onChangeSearchValueHandler={onChangeSearchValueHandler}
          searchValue={searchValue}
          onAddClickButtonHandler={onAddClickButtonHandler}
          onBlurHandler={onBlurHandler}
          onFocusSearchHandler={onFocusSearchHandler}
          buttonText="Add Expense Report"
        />
      <Styled.TableWrapper>
        {isContentLoading && (
          <Styled.LoaderWrapper>
            <LoaderComponent theme="preview" />
          </Styled.LoaderWrapper>
        )}
        <TableReportExpense
          isAllChecked={isAllChecked}
          onCheckedItemHandler={onCheckedItemHandler}
          onCheckedAllItemsHandler={onCheckedAllItemsHandler}
          sortedReportList={sortedReportList}
          dateFormat={dateFormat}
          sortField={sortField}
          sortOrder={sortOrder}
          requestSort={requestSort}
        />
        {sortedReportList.length ? (
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
