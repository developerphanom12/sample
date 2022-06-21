import { FC } from 'react';

import { HeaderPanelMaster } from 'components/HeaderPanelMaster';
import { TableSettingsCompany } from 'components/Table/TableSettings/TableSettingsCompany';
import { InsertCompanyModalWindow } from 'components/InsertCompanyModalWindow';
import { DeleteModalWindow } from 'components/DeleteModalWindow';

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
  } = useCompanyListState();
  return (
    <Styled.Section>
      <InsertCompanyModalWindow
        headerText={isEdit ? 'Edit Company' : 'Insert Company'}
        isModalWindowOpen={isModalWindowOpen}
        isLoading={isLoading}
        onCloseModalWindowHandler={onModalWindowToggle}
        onChangeInputValueHandler={onChangeCompanyNameHandler}
        onSaveButtonCLickHandler={async () => {}}
        onEnterCreateItemClick={onEnterInsertUser}
        onUploadCompanyLogoHandler={onUploadCompanyLogoHandler}
        inputValue={companyName}
        logoSrc={logoSrc}
        logoName={logoName}
        isDisableButton={!companyName.length}
        onDeleteLogoHandler={onDeleteLogoHandler}
      />
      <DeleteModalWindow
        isLoading={isLoading}
        onCloseDeleteModalWindowHandler={onDeleteModalWindowToggle}
        onDeleteButtonClickHandler={async () => {}}
        isDeleteModalWindowOpen={isDeleteModalWindowOpen}
        deleteItemName={`company ${'Company 1'}`}
      />
      <Styled.ContentWrapper>
        <HeaderPanelMaster
          onChangeSearchValueHandler={onChangeSearchValueHandler}
          searchValue={searchValue}
          onAddClickButtonHandler={onModalWindowToggle}
          isGuard
          userRole="owner"
        />
        <TableSettingsCompany
          userRole="owner"
          onDeleteIconClickHandler={onDeleteIconClickHandler}
          onEditIconClickHandler={onEditIconClickHandler}
        />
      </Styled.ContentWrapper>
    </Styled.Section>
  );
};
