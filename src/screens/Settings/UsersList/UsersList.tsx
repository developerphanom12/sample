import { FC } from 'react';

import { InsertUserModalWindow } from 'components/InsertUserModalWindow';
import { DeleteModalWindow } from 'components/DeleteModalWindow';
import { SettingsItemPageContent } from 'components/SettingsItemPageContent';

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
    onChangeInputValue,
    onForwardClick,
    onBackwardClick,
    onEnterGoToClick,
    onChangeItemsPerPage,
    onGoToClick,
    itemsPerPage,
    inputPaginationValue,
    pages,
    currentPage,
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
      <SettingsItemPageContent
        userRole="owner"
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
      />
    </Styled.Section>
  );
};
