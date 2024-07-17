import { FC, useEffect } from 'react';

import { InsertCompanyModalWindow } from 'components/InsertCompanyModalWindow';
import { DeleteModalWindow } from 'components/DeleteModalWindow';
import { SettingsItemPageContent } from 'components/SettingsItemPageContent';
import { LoaderComponent } from 'components/Loader';

import { CompanyListStyles as Styled } from './CompanyList.style';
import { useCompanyListState } from './CompanyList.state';

export const CompanyList: FC = () => {
  const {
    searchValue,
    isModalWindowOpen,
    debouncedValue,
    isContentLoading,
    isDeleteModalWindowOpen,
    isLoading,
    onDeleteModalWindowToggle,
    onEditIconClickHandler,
    companyName,
    logoSrc,
    logoName,
    isEdit,
    onDeleteIconClickHandler,
    onChangeCompanyNameHandler,
    onUploadCompanyLogoHandler,
    onEnterCreateCompany,
    onModalWindowToggle,
    onChangeSearchValueHandler,
    onDeleteLogoHandler,
    onChangeInputValue,
    onForwardClick,
    onBackwardClick,
    onEnterGoToClick,
    onChangeItemsPerPage,
    onGoToClick,
    onCreateCompanyHandler,
    onDeleteCompanyHandler,
    onCloseModalWindowHandler,
    onDeleteCompanyLogo,
    onChangePagesAmount,
    onFocusSearchHandler,
    onBlurHandler,
    isFocus,
    isCompanyLogoLoading,
    userRole,
    itemsPerPage,
    inputPaginationValue,
    pages,
    currentPage,
    companies,
    isFetchingData,
    selectedCompany,
    isDisabledButton,
    searchedCompanies,
    count,
    onUpdateCompanyHandler,
    onChangePage,
    onGetAllCompaniesHandler,
  } = useCompanyListState();

  useEffect(() => {
    !searchValue && onGetAllCompaniesHandler();
  }, [searchValue]);

  useEffect(() => {
    debouncedValue && onGetAllCompaniesHandler({ search: debouncedValue });
  }, [debouncedValue]);

  useEffect(() => {
    if (!count) return;
    onChangePagesAmount(Number(itemsPerPage.value), count);
  }, [count, itemsPerPage]);

  return (
    <Styled.Section>
      <InsertCompanyModalWindow
        onDeleteCompanyLogo={onDeleteCompanyLogo}
        isCompanyLogoLoading={isCompanyLogoLoading}
        headerText={isEdit ? 'Edit Company' : 'Insert Company'}
        isModalWindowOpen={isModalWindowOpen}
        isLoading={isLoading}
        onCloseModalWindowHandler={onCloseModalWindowHandler}
        onChangeInputValueHandler={onChangeCompanyNameHandler}
        onSaveButtonCLickHandler={
          isEdit ? onUpdateCompanyHandler : onCreateCompanyHandler
        }
         text="Name"
      
        onEnterCreateItemClick={onEnterCreateCompany}
        onUploadCompanyLogoHandler={onUploadCompanyLogoHandler}
        inputValue={companyName}
        logoSrc={logoSrc}
        logoName={logoName}
        isDisableButton={isDisabledButton}
        isEdit={isEdit}
        onDeleteLogoHandler={onDeleteLogoHandler}
      />
      <DeleteModalWindow
        isLoading={isLoading}
        onCloseDeleteModalWindowHandler={onDeleteModalWindowToggle}
        onDeleteButtonClickHandler={onDeleteCompanyHandler}
        isDeleteModalWindowOpen={isDeleteModalWindowOpen}
        deleteItemName={`‘${selectedCompany?.name}’`}
        categoryName="company"
      />
      {isFetchingData ? (
        <Styled.LoaderWrapper>
          <LoaderComponent theme="preview" />
        </Styled.LoaderWrapper>
      ) : (
        <SettingsItemPageContent
          isFocus={isFocus}
          isFetchingData={isFetchingData}
          isContentLoading={isContentLoading}
          onFocusSearchHandler={onFocusSearchHandler}
          onBlurHandler={onBlurHandler}
          searchedCompanies={searchedCompanies}
          userRole={userRole}
          onDeleteIconClickHandler={onDeleteIconClickHandler}
          onEditIconClickHandler={onEditIconClickHandler}
          pages={pages}
          onChangePage={onChangePage}
          currentPage={currentPage}
          onChangeInputValue={onChangeInputValue}
          onForwardClick={onForwardClick}
          onBackwardClick={onBackwardClick}
          onEnterGoToClick={onEnterGoToClick}
          onChangeReceiptsPerPage={onChangeItemsPerPage}
          receiptsPerPage={itemsPerPage}
          inputPaginationValue={inputPaginationValue}
          onGoToClick={onGoToClick}
          onChangeSearchValueHandler={onChangeSearchValueHandler}
          searchValue={searchValue}
          onAddClickButtonHandler={onModalWindowToggle}
          isGuard
          companies={companies}
        />
      )}
    </Styled.Section>
  );
};
