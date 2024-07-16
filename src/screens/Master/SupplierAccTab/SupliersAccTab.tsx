import { FC, useEffect } from 'react';

import { EmptyData } from 'components/EmptyData';
import { LoaderComponent } from 'components/Loader';
import { MasterModalWindowsBox } from 'components/MasterModalWindowsBox';

import { useSuppliersAccTabState } from './SupliersAccTab.state';
import { SupliersAccTabStyles as Styled } from './SupliersAccTab.style';

import { EMPTY_DATA_STRINGS_MASTER as Strings } from 'constants/strings';
import { SupplierAccContent } from './SupplierAccContent/SupplierAccContent';

export const SupliersAccTab: FC = () => {
  const {
    date_format,
    isLoading,
    isModalWindowOpen,
    modalInputValue,
    onChangeCategoryNameValueHandler,
    onChangeSearchValueHandler,
    onCreateSupplierHandler,
    onEnterCreateSupplierClick,
    onGetAllSuppliersHandler,
    onModalWindowToggle,
    onModalWindowCancelClickButtonHandler,
    searchValue,
    selectedCategory,
    suppliersAccList,
    isEdit,
    count,
    isDeleteModalWindowOpen,
    onDeleteModalWindowToggle,
    onDeleteItemClickHandler,
    onDeleteButtonClickHandler,
    onEditItemClickHandler,
    isDisableButton,
    onSaveButtonClickHandler,
    onChangeItemsPerPage,
    onChangeInputValue,
    onChangePage,
    onEnterGoToClick,
    onGoToClick,
    onForwardClick,
    onBackwardClick,
    onChangePagesAmount,
    currentPage,
    inputPaginationValue,
    itemsPerPage,
    pages,
    onBlurHandler,
    onFocusSearchHandler,
    debouncedValue,
    isContentLoading,
    isFocus,
    isFetchingData,
    isEmptyData,
    isHeaderPanel,
    isSearching,
    searchedItems,
    active_account,
    userRole,
  } = useSuppliersAccTabState();

  useEffect(() => {
    !searchValue &&
      onGetAllSuppliersHandler({
        take: +itemsPerPage.value,
        skip: currentPage * +itemsPerPage.value,
      });
  }, [searchValue, active_account]);

  useEffect(() => {
    debouncedValue &&
      onGetAllSuppliersHandler({ search: debouncedValue }, isSearching);
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
        onSaveButtonCLickHandler={
          isEdit ? onSaveButtonClickHandler : onCreateSupplierHandler
        }
        isModalWindowOpen={isModalWindowOpen}
        onEnterCreateItemClick={onEnterCreateSupplierClick}
        headerText={
          isEdit ? 'Edit Supplier Account' : 'Add Supplier Account'
        }
        text="Supplier Account Name"
        inputValue={modalInputValue}
        onCloseDeleteModalWindowHandler={onDeleteModalWindowToggle}
        onDeleteButtonClickHandler={onDeleteButtonClickHandler}
        isDeleteModalWindowOpen={isDeleteModalWindowOpen}
        deleteItemName={`‘${selectedCategory?.name}’`}
        isDisableButton={isDisableButton}
        categoryName="supplier account"
      />
      {isFetchingData ? (
        <Styled.LoaderWrapper>
          <LoaderComponent theme="preview" />
        </Styled.LoaderWrapper>
      ) : !suppliersAccList?.length &&
        !searchValue &&
        !isFetchingData &&
        !isContentLoading &&
        isEmptyData ? (
        <EmptyData
          isUploadFile={false}
          buttonText={Strings.suppliers.buttonText}
          firstSubtitle={Strings.suppliers.firstSubtitle}
          secondSubtitle={Strings.suppliers.secondSubtitle}
          title={Strings.suppliers.title}
          onClick={onModalWindowToggle}
          userRole={userRole}
        />
      ) : !isFetchingData && isHeaderPanel ? (
        <SupplierAccContent
          userRole={userRole}
          searchedItems={searchedItems}
          isContentLoading={isContentLoading}
          isFetchingData={isFetchingData}
          isFocus={isFocus}
          categories={suppliersAccList}
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
          tabName="Name"
          onBlurHandler={onBlurHandler}
          onFocusSearchHandler={onFocusSearchHandler}
          onChangePage={onChangePage}
        />
      ) : null}
    </>
  );
};
