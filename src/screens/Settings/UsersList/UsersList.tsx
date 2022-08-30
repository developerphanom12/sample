import { FC, useEffect } from 'react';

import { SettingsItemPageContent } from 'components/SettingsItemPageContent';
import { LoaderComponent } from 'components/Loader';
import { SuccessPopup } from 'components/SuccessPopup';

import { UserListStyles as Styled } from './UserList.styles';
import { useUserListState } from './UserList.state';
import { ModalBox } from './ModalBox';

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
    userRole,
    onClickDeleteUserButton,
    selectedUserName,
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
    modalFields,
    count,
    isFetchingData,
    isDisableButton,
    isInvitation,
    isSentSuccessPopup,
    isResentSuccessPopup,
    setIsSentSuccessPopup,
    setIsResendSuccessPopup,
    onChangePage,
    onChangePagesAmount,
    onModalWindowCancelClickButtonHandler,
    onModalWindowToggleHandler,
    onFocusSearchHandler,
    onBlurHandler,
    onGetAllCompanyMembersHandler,
    onResendInvitationHandler,
  } = useUserListState();

  useEffect(() => {
    !searchValue && onGetAllCompanyMembersHandler();
  }, [searchValue]);

  useEffect(() => {
    debouncedValue &&
      onGetAllCompanyMembersHandler({
        search: debouncedValue,
      });
  }, [debouncedValue]);

  useEffect(() => {
    if (!count) return;
    onChangePagesAmount(Number(itemsPerPage.value), count);
  }, [count, itemsPerPage]);

  useEffect(() => {
    if (isSentSuccessPopup) setTimeout(setIsSentSuccessPopup, 3000);
    if (isResentSuccessPopup) setTimeout(setIsResendSuccessPopup, 3000);
  }, [isSentSuccessPopup, isResentSuccessPopup]);

  return (
    <Styled.Section>
      <ModalBox
        modalFields={modalFields}
        isLoading={isLoading}
        isDisableButton={isDisableButton}
        onCloseModalWindowHandler={onModalWindowCancelClickButtonHandler}
        onSaveButtonCLickHandler={formik.handleSubmit}
        onEnterCreateItemClick={onEnterInsertUser}
        isModalWindowOpen={isModalWindowOpen}
        headerText={isEdit ? 'Edit User' : 'Insert User'}
        formikMeta={formik.getFieldMeta}
        formikProps={formik.getFieldProps}
        onCloseDeleteModalWindowHandler={onDeleteModalWindowToggle}
        onDeleteButtonClickHandler={onClickDeleteUserButton}
        isDeleteModalWindowOpen={isDeleteModalWindowOpen}
        deleteItemName={`user ${selectedUserName}`}
        isEdit={isEdit}
        isInvitation={isInvitation}
      />
      {(isResentSuccessPopup || isSentSuccessPopup) && (
        <Styled.SuccessPopupWrapper>
          <SuccessPopup
            titleText={
              isResentSuccessPopup
                ? 'Invitation resent successfully'
                : 'Invitation sent successfully'
            }
          />
        </Styled.SuccessPopupWrapper>
      )}
      {isFetchingData ? (
        <Styled.LoaderWrapper>
          <LoaderComponent theme="preview" />
        </Styled.LoaderWrapper>
      ) : (
        <SettingsItemPageContent
          onResendInvitationHandler={onResendInvitationHandler}
          isFetchingData={isFetchingData}
          isContentLoading={isContentLoading}
          isFocus={isFocus}
          searchedUsers={searchedUsers}
          onFocusSearchHandler={onFocusSearchHandler}
          onBlurHandler={onBlurHandler}
          members={members}
          isMemeberList
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
          onAddClickButtonHandler={onModalWindowToggleHandler}
          onChangePage={onChangePage}
          isGuard
        />
      )}
    </Styled.Section>
  );
};
