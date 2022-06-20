import { FC } from 'react';

import { HeaderPanelMaster } from 'components/HeaderPanelMaster';
import { TableSettingsCompany } from 'components/Table/TableSettings/TableSettingsCompany';
import { InsertCompanyModalWindow } from 'components/InsertCompanyModalWindow';

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
    companyName,
    logoSrc,
    logoName,
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
        headerText="Insert Company"
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
      <Styled.ContentWrapper>
        <HeaderPanelMaster
          onChangeSearchValueHandler={onChangeSearchValueHandler}
          searchValue={searchValue}
          onAddClickButtonHandler={onModalWindowToggle}
        />
        <TableSettingsCompany />
      </Styled.ContentWrapper>
    </Styled.Section>
  );
};
