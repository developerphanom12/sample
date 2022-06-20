import { FC } from 'react';

import { HeaderPanelMaster } from 'components/HeaderPanelMaster';
import { TableSettings } from 'components/Table/TableSettings';
import { InsertUserModalWindow } from 'components/InsertUserModalWindow';

import { UserListStyles as Styled } from './UserList.styles';
import { useUserListState } from './UserList.state';

export const UsersList: FC = () => {
  const {
    isLoading,
    isModalWindowOpen,
    searchValue,
    formik,
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
      <Styled.ContentWrapper>
        <HeaderPanelMaster
          onChangeSearchValueHandler={onChangeSearchValueHandler}
          searchValue={searchValue}
          onAddClickButtonHandler={onModalWindowToggle}
        />
        <TableSettings />
      </Styled.ContentWrapper>
    </Styled.Section>
  );
};
