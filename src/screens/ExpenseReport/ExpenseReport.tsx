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
    onModalWindowToggle,
    onChangeSearchValueHandler,

    //form value and handler
    modalReportFormType,
    modalInputReportFor,
    modalInputReportDate,
    modalInputReportName,
    onChangeReportFormHandler,
    onChangeReportForHandler,
    onChangeReportDateHandler,
    onChangeReportNameHandler,
    modalReportCreateButtonHandler,
    modalReportCancelButtonHandler,
    onEnterCreateCategoryClick,

    // onGetAllCategoriesHandler,
    searchValue,
    reportsList,
    sortedReports,
    isCompanyChanged,
    count,
    company,
    // onDeleteItemClickHandler,
    // onDeleteButtonClickHandler,
    // selectedCategory,
    isEdit,
    // onEditItemClickHandler,
    // isDisableButton,
    // onSaveButtonClickHandler,
    setItemsPerPage,
    setCurrentPage,
    onChangeInputValue,
    onChangePage,
    onEnterGoToClick,
    onGoToClick,
    onForwardClick,
    onBackwardClick,
    // onChangePagesAmount,
    onBlurHandler,
    onFocusSearchHandler,
    currentPage,
    // inputPaginationValue,
    itemsPerPage,
    pages,
    isFetchingReports,
    isEmptyData,
    debouncedValue,
    isFocus,
    isContentLoading,
    isSearching,
    searchedItems,

    active_account,
    userRole,

    onFetchReportHandler,
    reportFetchParams,
  } = useExpenseReportState();

  useEffect(() => {
    !searchValue &&
    onFetchReportHandler({
        take: +itemsPerPage.value,
        skip: currentPage * +itemsPerPage.value,
      });
  }, [searchValue, active_account]);

  useEffect(() => {
    debouncedValue &&
    onFetchReportHandler(
        {
          search: debouncedValue,
        },
        // isSearching
      );
  }, [debouncedValue]);

  // useEffect(() => {
  //   if (!count) return;
  //   onChangePagesAmount(+itemsPerPage.value, count);
  // }, [count, itemsPerPage]);

  useEffect(() => {
    onFetchReportHandler({
      ...reportFetchParams,
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
        headerText={'Add to Expense Report'}
        // isDisableButton={isDisableButton}

        radioReportFormType={modalReportFormType}
        onChangeReportFormHandler={onChangeReportFormHandler}
        inputValueReportFor={modalInputReportFor}
        onChangeReportForHandler={onChangeReportForHandler}
        inputValueReportDate={modalInputReportDate}
        onChangeReportDateHandler={onChangeReportDateHandler}
        inputValueReportName={modalInputReportName}
        onChangeReportNameHandler={onChangeReportNameHandler}

        modalReportCreateButtonHandler={modalReportCreateButtonHandler}
        modalReportCancelButtonHandler={modalReportCancelButtonHandler}
        // onEnterCreateItemClick={onEnterCreateCategoryClick}
        // onSaveButtonCLickHandler={
          //   isEdit ? onSaveButtonClickHandler : onCreateExpenseHandler
        // }
        isModalWindowOpen={isModalWindowOpen}
        onModalWindowToggle={onModalWindowToggle}
      />
      {isFetchingReports ? (
        <Styled.LoaderWrapper>
          <LoaderComponent theme="preview" />
        </Styled.LoaderWrapper>
      ) : !isFetchingReports && isEmptyData && !reportsList?.length ? (
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
          isFetchingData={isFetchingReports}
          isFocus={isFocus}
          reportsList={reportsList}
          currentPage={currentPage}
          dateFormat={company.date_format}
          // inputPaginationValue={inputPaginationValue}
          onAddClickButtonHandler={onModalWindowToggle}
          onBackwardClick={onBackwardClick}
          onChangeInputValue={onChangeInputValue}
          // onChangeReceiptsPerPage={onChangeItemsPerPage}
          onChangeSearchValueHandler={onChangeSearchValueHandler}
          // onDeleteIconClickHandler={onDeleteItemClickHandler}
          // onEditIconClickHandler={onEditItemClickHandler}
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
          receiptList={sortedReports}
        />
      )}
    </>
  );
};
