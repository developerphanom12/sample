import { FC, useEffect } from 'react';

import { DeleteModalWindow } from 'components/DeleteModalWindow';
import { MasterModalWindow } from 'components/MasterModalWindow';
import { EmptyData } from 'components/EmptyData';
import { LoaderComponent } from 'components/Loader';

import { useTypesTabState } from './TypesTab.state';
import { TypesTabStyles as Styled } from './TypesTab.style';
import { TypesContent } from './TypesContent/TypesContent';

import { EMPTY_DATA_STRINGS_MASTER as Strings } from 'constants/strings';

export const TypesTab: FC = () => {
  const {
    date_format,
    isDeleteModalWindowOpen,
    isDisableButton,
    isLoading,
    isModalWindowOpen,
    modalInputValue,
    onChangeCategoryNameValueHandler,
    onChangeSearchValueHandler,
    onCreateTypeHandler,
    onEnterCreateTypeClick,
    onDeleteButtonClickHandler,
    onDeleteItemClickHandler,
    onDeleteModalWindowToggle,
    onEditItemClickHandler,
    onGetAllTypesHandler,
    onModalWindowToggle,
    onSaveButtonClickHandler,
    onModalWindowCancelClickButtonHandler,
    searchValue,
    selectedCategory,
    typesList,
    isEdit,
    count,
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
    debouncedValue,
    isEmptyData,
    isFetchingData,
    isFocus,
    isHeaderPanel,
    isContentLoading,
    searchedItems,
    isSearching,
    active_account,
  } = useTypesTabState();

  useEffect(() => {
    !searchValue && onGetAllTypesHandler();
  }, [searchValue, active_account]);

  useEffect(() => {
    debouncedValue &&
      onGetAllTypesHandler({ search: debouncedValue }, isSearching);
  }, [debouncedValue]);

  useEffect(() => {
    if (!count) return;
    onChangePagesAmount(Number(itemsPerPage.value), count);
  }, [count, itemsPerPage]);

  return (
    <>
      <MasterModalWindow
        isDisableButton={isDisableButton}
        onCloseModalWindowHandler={onModalWindowCancelClickButtonHandler}
        isModalWindowOpen={isModalWindowOpen}
        headerText={isEdit ? 'Edit Type' : 'Insert Type'}
        onChangeInputValueHandler={onChangeCategoryNameValueHandler}
        onEnterCreateItemClick={onEnterCreateTypeClick}
        onSaveButtonCLickHandler={
          isEdit ? onSaveButtonClickHandler : onCreateTypeHandler
        }
        inputValue={modalInputValue}
        isLoading={isLoading}
      />
      <DeleteModalWindow
        onCloseDeleteModalWindowHandler={onDeleteModalWindowToggle}
        onDeleteButtonClickHandler={onDeleteButtonClickHandler}
        isDeleteModalWindowOpen={isDeleteModalWindowOpen}
        deleteItemName={`type “${selectedCategory?.name}”`}
        isLoading={isLoading}
      />
      {isFetchingData ? (
        <Styled.LoaderWrapper>
          <LoaderComponent theme="preview" />
        </Styled.LoaderWrapper>
      ) : !typesList?.length &&
        !searchValue &&
        !isFetchingData &&
        !isContentLoading &&
        isEmptyData ? (
        <EmptyData
          isUploadFile={false}
          buttonText={Strings.type.buttonText}
          firstSubtitle={Strings.type.firstSubtitle}
          secondSubtitle={Strings.type.secondSubtitle}
          title={Strings.type.title}
          onClick={onModalWindowToggle}
        />
      ) : !isFetchingData && isHeaderPanel ? (
        <TypesContent
          searchedItems={searchedItems}
          isContentLoading={isContentLoading}
          isFetchingData={isFetchingData}
          isFocus={isFocus}
          categories={typesList}
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
          tabName="Type"
          onBlurHandler={onBlurHandler}
          onFocusSearchHandler={onFocusSearchHandler}
          onChangePage={onChangePage}
        />
      ) : null}
    </>
  );
};
