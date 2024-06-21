import { FC } from 'react';

import { HeaderPanel } from 'components/HeaderPanel';
import { LoaderComponent } from 'components/Loader';
import { PaginationPanel } from 'components/PaginationPanel';
import { TableInboxAdmin } from 'components/Table/TableInboxAdmin';

import { InboxContentStyles as Styled } from 'screens/Inbox/InboxContent/InboxContent.style';
import { HeaderPanelMaster } from 'components/HeaderPanelMaster';
import { useCategoriesTabState } from '../ExpenseReportstate';
import { TableExpense } from 'components/Table/TableExpense/TableInboxAdmin';

export const ExpenseContent: FC<IInboxContent> = (props) => {
  const {
    dateValue,
    formattedDate,
    isInputDate,
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
    onMarkAsHandler,
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

  const {
    isLoading,
    isModalWindowOpen,
    modalInputValue,
    onChangeCategoryNameValueHandler,
    onCreateCategoryHandler,
    onEnterCreateCategoryClick,
    onGetAllCategoriesHandler,
    onModalWindowToggle,
    categoriesList,
    count,
    date_format,
    isDeleteModalWindowOpen,
    onDeleteModalWindowToggle,
    onDeleteItemClickHandler,
    onDeleteButtonClickHandler,
    selectedCategory,
    isEdit,
    onEditItemClickHandler,
    isDisableButton,
    onSaveButtonClickHandler,
    onModalWindowCancelClickButtonHandler,
    onChangeItemsPerPage,
    onChangePagesAmount,
    onBlurHandler,
    onFocusSearchHandler,
    userRole,
  } = useCategoriesTabState();


  return (
    <Styled.Wrapper>
      {!isFetchingReceipts && (
        <HeaderPanelMaster
          isGuard
          userRole={userRole}
          onChangeSearchValueHandler={onChangeSearchValueHandler}
          searchValue={searchValue}
          onAddClickButtonHandler={onModalWindowToggle}
          onBlurHandler={onBlurHandler}
          onFocusSearchHandler={onFocusSearchHandler}
          buttonText="Add Expense Report"
        />
      )}
      <Styled.TableWrapper>
        {isContentLoading && (
          <Styled.LoaderWrapper>
            <LoaderComponent theme="preview" />
          </Styled.LoaderWrapper>
        )}
        <TableExpense
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
