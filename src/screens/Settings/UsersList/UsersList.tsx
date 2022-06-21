import { FC } from 'react';

import { HeaderPanelMaster } from 'components/HeaderPanelMaster';
import { TableSettings } from 'components/Table/TableSettings';
import { InsertUserModalWindow } from 'components/InsertUserModalWindow';
import { DeleteModalWindow } from 'components/DeleteModalWindow';

import { UserListStyles as Styled } from './UserList.styles';
import { useUserListState } from './UserList.state';

export const UsersList: FC = () => {
  const {
    isLoading,
    isModalWindowOpen,
    searchValue,
    formik,
    onDeleteModalWindowToggle,
    isDeleteModalWindowOpen,
    onDeleteIconClickHandler,
    onEditIconClickHandler,
    onChangeSearchValueHandler,
    onEnterInsertUser,
    onModalWindowToggle,
  } = useUserListState();
  return (
    <Styled.Section>
      <InsertUserModalWindow
        isLoading={isLoading}
        onCloseModalWindowHandler={onModalWindowToggle}
        onSaveButtonCLickHandler={async () => {}}
        onEnterCreateItemClick={onEnterInsertUser}
        isModalWindowOpen={isModalWindowOpen}
        headerText="Insert User"
        formikMeta={formik.getFieldMeta}
        formikProps={formik.getFieldProps}
      />
      <DeleteModalWindow
        isLoading={isLoading}
        onCloseDeleteModalWindowHandler={onDeleteModalWindowToggle}
        onDeleteButtonClickHandler={async () => {}}
        isDeleteModalWindowOpen={isDeleteModalWindowOpen}
        deleteItemName={`user ${'User 1'}`}
      />
      <Styled.ContentWrapper>
        <HeaderPanelMaster
          onChangeSearchValueHandler={onChangeSearchValueHandler}
          searchValue={searchValue}
          onAddClickButtonHandler={onModalWindowToggle}
        />
        <TableSettings
          userRole="owner"
          onDeleteIconClickHandler={onDeleteIconClickHandler}
          onEditIconClickHandler={onEditIconClickHandler}
        />
      </Styled.ContentWrapper>
    </Styled.Section>
  );
};
