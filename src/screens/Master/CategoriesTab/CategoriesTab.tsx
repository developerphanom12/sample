import { FC, useEffect } from 'react';

import { EmptyData } from 'components/EmptyData';
import { LoaderComponent } from 'components/Loader';
import { MasterModalWindowsBox } from 'components/MasterModalWindowsBox';

import { useCategoriesTabState } from './CategoriesTab.state';
import { CategoriesTabStyles as Styled } from './CategoriesTab.style';
import { CategoryContent } from './CategoryContent';

import { EMPTY_DATA_STRINGS_MASTER as Strings } from 'constants/strings';

export const CategoriesTab: FC = () => {
  const {
    isLoading,
    isModalWindowOpen,
    modalInputValue,
    onChangeCategoryNameValueHandler,
    onChangeSearchValueHandler,
    onCreateCategoryHandler,
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
    isHeaderPanel,
    isContentLoading,
    isSearching,
    searchedItems,
  } = useCategoriesTabState();

  useEffect(() => {
    !searchValue && onGetAllCategoriesHandler();
  }, [searchValue]);

  useEffect(() => {
    debouncedValue &&
      onGetAllCategoriesHandler({ search: debouncedValue }, isSearching);
  }, [debouncedValue]);

  useEffect(() => {
    if (!count) return;
    onChangePagesAmount(Number(itemsPerPage.value), count);
  }, [count, itemsPerPage]);

  return (
    <>
      <MasterModalWindowsBox
        isLoading={isLoading}
        onCloseModalWindowHandler={onModalWindowCancelClickButtonHandler}
        onChangeInputValueHandler={onChangeCategoryNameValueHandler}
        onEnterCreateItemClick={onEnterCreateCategoryClick}
        onSaveButtonCLickHandler={
          isEdit ? onSaveButtonClickHandler : onCreateCategoryHandler
        }
        isModalWindowOpen={isModalWindowOpen}
        headerText={isEdit ? 'Edit Category' : 'Insert Category'}
        inputValue={modalInputValue}
        onDeleteButtonClickHandler={onDeleteButtonClickHandler}
        deleteItemName={`category “${selectedCategory?.name}”`}
        isDeleteModalWindowOpen={isDeleteModalWindowOpen}
        onCloseDeleteModalWindowHandler={onDeleteModalWindowToggle}
        isDisableButton={isDisableButton}
      />
      {isFetchingData ? (
        <Styled.LoaderWrapper>
          <LoaderComponent theme="preview" />
        </Styled.LoaderWrapper>
      ) : !categoriesList?.length &&
        !searchValue &&
        !isSearching &&
        !isFetchingData &&
        !isContentLoading &&
        isEmptyData ? (
        <EmptyData
          isUploadFile={false}
          buttonText={Strings.categories.buttonText}
          firstSubtitle={Strings.categories.firstSubtitle}
          secondSubtitle={Strings.categories.secondSubtitle}
          title={Strings.categories.title}
          onClick={onModalWindowToggle}
        />
      ) : isHeaderPanel ? (
        <CategoryContent
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
          tabName="Supplier"
          onBlurHandler={onBlurHandler}
          onFocusSearchHandler={onFocusSearchHandler}
          onChangePage={onChangePage}
          searchedItems={searchedItems}
        />
      ) : null}
    </>
  );
};
