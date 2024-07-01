import { FC, useEffect } from 'react';

import { EmptyData } from 'components/EmptyData';
import { LoaderComponent } from 'components/Loader';

import { useExpenseReportState } from './ExpenseReportstate';
import { CategoriesTabStyles as Styled } from 'screens/Master/CategoriesTab/CategoriesTab.style';

import { EMPTY_DATA_STRINGS_MASTER as Strings } from 'constants/strings';
import { ExpenseContent } from './ExpenseContent';
import { useInboxState } from 'screens/Inbox/Inbox.state';
import { MasterExpenseModalWindowBox } from 'components/MasterExpenseModalWindowBox';

export const ExpenseReport: FC = () => {
  const {
    isLoading,
    isModalWindowOpen,
    modalInputValue,
    modalInputDate,
    modalInputName,
    onChangeExpenseUserValueHandler,
    onChangeSearchValueHandler,
    onCreateExpenseHandler,
    onEnterCreateCategoryClick,
    onGetAllCategoriesHandler,
    onModalWindowToggle,
    searchValue,
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
    onChangeInputValue,
    onChangePage,
    onEnterGoToClick,
    onGoToClick,
    onForwardClick,
    onBackwardClick,
    onChangePagesAmount,
    onBlurHandler,
    onFocusSearchHandler,
    currentPage,
    inputPaginationValue,
    itemsPerPage,
    pages,
    isFetchingData,
    isEmptyData,
    debouncedValue,
    isFocus,
    isContentLoading,
    isSearching,
    searchedItems,
    active_account,
    userRole,
    onChangeExpenseDateValueHandler,
    onChangeExpenseNameValueHandler,

    onFetchReportHandler
  } = useExpenseReportState();

  useEffect(() => {
    !searchValue &&
      onGetAllCategoriesHandler({
        take: +itemsPerPage.value,
        skip: currentPage * +itemsPerPage.value,
      });
  }, [searchValue, active_account]);

  useEffect(() => {
    debouncedValue &&
      onGetAllCategoriesHandler(
        {
          search: debouncedValue,
        },
        isSearching
      );
  }, [debouncedValue]);

  useEffect(() => {
    if (!count) return;
    onChangePagesAmount(+itemsPerPage.value, count);
  }, [count, itemsPerPage]);

  useEffect(() => {
    onFetchReportHandler({
      ...fetchParams,
      skip: 0,
    });
    if (debouncedValue || isCompanyChanged) {
      setCurrentPage(0);
    }
  }, [debouncedValue, active_account]);

  return (
    <>
      <MasterExpenseModalWindowBox
        isLoading={isLoading}
        onCloseModalWindowHandler={onModalWindowCancelClickButtonHandler}
        onChangeInputValueHandler={onChangeExpenseUserValueHandler}
        onChangeExpenseDateValueHandler={onChangeExpenseDateValueHandler}
        onChangeExpenseNameValueHandler={onChangeExpenseNameValueHandler}
        onEnterCreateItemClick={onEnterCreateCategoryClick}
        onSaveButtonCLickHandler={
          isEdit ? onSaveButtonClickHandler : onCreateExpenseHandler
        }
        isModalWindowOpen={isModalWindowOpen}
        headerText={'Add to Expense Report'}
        inputValue={modalInputValue}
        dateValue={modalInputDate}
        reportName={modalInputName}
        onDeleteButtonClickHandler={onDeleteButtonClickHandler}
        deleteItemName={`‘${selectedCategory?.name}’`}
        categoryName="category"
        isDeleteModalWindowOpen={isDeleteModalWindowOpen}
        onCloseDeleteModalWindowHandler={onDeleteModalWindowToggle}
        isDisableButton={isDisableButton}
      />
      {isFetchingData ? (
        <Styled.LoaderWrapper>
          <LoaderComponent theme="preview" />
        </Styled.LoaderWrapper>
      ) : !isFetchingData && isEmptyData && !categoriesList?.length ? (
        <EmptyData
          isUploadFile={false}
          buttonText={Strings.categories.buttonText}
          firstSubtitle={Strings.categories.firstSubtitle}
          secondSubtitle={Strings.categories.secondSubtitle}
          title={Strings.categories.title}
          onClick={onModalWindowToggle}
          userRole={userRole}
        />
      ) : (
        <ExpenseContent
          userRole={userRole}
          isContentLoading={isContentLoading}
          isFetchingData={isFetchingData}
          isFocus={isFocus}
          categories={categoriesList}
          currentPage={currentPage}
          dateFormat={date_format}
          inputPaginationValue={inputPaginationValue}
          onAddClickButtonHandler={onModalWindowToggle}
          onBackwardClick={onBackwardClick}
          onChangeInputValue={onChangeInputValue}
          onChangeReceiptsPerPage={onChangeItemsPerPage}
          onChangeSearchValueHandler={onChangeSearchValueHandler}
          onDeleteIconClickHandler={onDeleteItemClickHandler}
          onEditIconClickHandler={onEditItemClickHandler}
          onForwardClick={onForwardClick}
          onEnterGoToClick={onEnterGoToClick}
          onGoToClick={onGoToClick}
          pages={pages}
          receiptsPerPage={itemsPerPage}
          searchValue={searchValue}
          tabName="Category"
          onBlurHandler={onBlurHandler}
          onFocusSearchHandler={onFocusSearchHandler}
          onChangePage={onChangePage}
          searchedItems={searchedItems}
          receiptList={sortedReceipts}
        />
      )}
    </>
  );
};
