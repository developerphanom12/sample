import { FC, useEffect } from 'react';

import { InsertUserModalWindow } from 'components/InsertUserModalWindow';
import { DeleteModalWindow } from 'components/DeleteModalWindow';
import { SettingsItemPageContent } from 'components/SettingsItemPageContent';
import { LoaderComponent } from 'components/Loader';

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
    onChangeInputValue,
    onForwardClick,
    onBackwardClick,
    onEnterGoToClick,
    onChangeItemsPerPage,
    onGoToClick,
    onClickDeleteUserButton,
    onInviteUserToCompanyHandler,
    selectedUser,
    itemsPerPage,
    inputPaginationValue,
    pages,
    currentPage,
    members,
    isEdit,
    debouncedValue,
    isContentLoading,
    isFocus,
    searchedUsers,
    isSearching,
    modalFields,
    count,
    isFetchingData,
    onChangePagesAmount,
    onModalWindowCancelClickButtonHandler,
    onModalWindowToggleHandler,
    onFocusSearchHandler,
    onBlurHandler,
    onGetAllCompanyMembersHandler,
  } = useUserListState();

  useEffect(() => {
    !searchValue && onGetAllCompanyMembersHandler();
  }, [searchValue]);

  useEffect(() => {
    debouncedValue &&
      onGetAllCompanyMembersHandler({ search: debouncedValue }, isSearching);
  }, [debouncedValue]);

  useEffect(() => {
    if (!count) return;
    onChangePagesAmount(Number(itemsPerPage.value), count);
  }, [count, itemsPerPage]);

  return (
    <Styled.Section>
      <InsertUserModalWindow
        modalFields={modalFields}
        isLoading={isLoading}
        isDisableButton={false}
        onCloseModalWindowHandler={onModalWindowCancelClickButtonHandler}
        onSaveButtonCLickHandler={formik.handleSubmit}
        onEnterCreateItemClick={onEnterInsertUser}
        isModalWindowOpen={isModalWindowOpen}
        headerText={isEdit ? 'Edit User' : 'Insert User'}
        formikMeta={formik.getFieldMeta}
        formikProps={formik.getFieldProps}
      />
      <DeleteModalWindow
        isLoading={isLoading}
        onCloseDeleteModalWindowHandler={onDeleteModalWindowToggle}
        onDeleteButtonClickHandler={async () => {}}
        isDeleteModalWindowOpen={isDeleteModalWindowOpen}
        deleteItemName={`user ${selectedUser?.name}`}
      />
      {isFetchingData ? (
        <Styled.LoaderWrapper>
          <LoaderComponent theme="preview" />
        </Styled.LoaderWrapper>
      ) : (
        <SettingsItemPageContent
          isFetchingData={isFetchingData}
          isContentLoading={isContentLoading}
          isFocus={isFocus}
          searchedUsers={searchedUsers}
          onFocusSearchHandler={onFocusSearchHandler}
          onBlurHandler={onBlurHandler}
          members={members}
          isMemeberList
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
          onAddClickButtonHandler={onModalWindowToggleHandler}
          isGuard
        />
      )}
    </Styled.Section>
  );
};
