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
    onEnterInsertUser,
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
    onCloseEditModalWindow,
    onChangeCompanyLogoHandler,
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
    onGetAllCompaniesHandler,
  } = useCompanyListState();

  useEffect(() => {
    onGetAllCompaniesHandler();
  }, []);

  return (
    <Styled.Section>
      <InsertCompanyModalWindow
        isCompanyLogoLoading={isCompanyLogoLoading}
        headerText={isEdit ? 'Edit Company' : 'Insert Company'}
        isModalWindowOpen={isModalWindowOpen}
        isLoading={isLoading}
        onCloseModalWindowHandler={
          isEdit ? onCloseEditModalWindow : onModalWindowToggle
        }
        onChangeInputValueHandler={onChangeCompanyNameHandler}
        onSaveButtonCLickHandler={
          isEdit ? onChangeCompanyLogoHandler : onCreateCompanyHandler
        }
        onEnterCreateItemClick={onEnterInsertUser}
        onUploadCompanyLogoHandler={onUploadCompanyLogoHandler}
        inputValue={companyName}
        logoSrc={logoSrc}
        logoName={logoName}
        isDisableButton={isDisabledButton}
        onDeleteLogoHandler={onDeleteLogoHandler}
      />
      <DeleteModalWindow
        isLoading={isLoading}
        onCloseDeleteModalWindowHandler={onDeleteModalWindowToggle}
        onDeleteButtonClickHandler={onDeleteCompanyHandler}
        isDeleteModalWindowOpen={isDeleteModalWindowOpen}
        deleteItemName={`company ${selectedCompany?.name}`}
      />
      {isFetchingData ? (
        <Styled.LoaderWrapper>
          <LoaderComponent theme="preview" />
        </Styled.LoaderWrapper>
      ) : (
        <SettingsItemPageContent
          isFetchingData={false}
          userRole={userRole as TRoles}
          onDeleteIconClickHandler={onDeleteIconClickHandler}
          onEditIconClickHandler={onEditIconClickHandler}
          pages={pages}
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
