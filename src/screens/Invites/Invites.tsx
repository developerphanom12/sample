import { useEffect } from 'react';

import { HeaderPanelMaster } from 'components/HeaderPanelMaster';
import { TableInvites } from 'components/Table/TableInvites';
import { PaginationPanel } from 'components/PaginationPanel';
import { DeleteModalWindow } from 'components/DeleteModalWindow';
import { LoaderComponent } from 'components/Loader';
import { EmptyData } from 'components/EmptyData';
import { InviteCompanyOwnerModalWindow } from 'components/InviteCompanyOwnerModalWindow';
import { SuccessPopup } from 'components/SuccessPopup';

import { InvitesStyles as Styled } from './Invites.style';
import { useInvitesState } from './Invites.state';

import { EMPTY_DATA_STRINGS_MASTER as Strings } from 'constants/strings';

export const Invites = () => {
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
    onEnterCreatetInvite,
    onChangeInputValue,
    onForwardClick,
    onBackwardClick,
    onEnterGoToClick,
    onChangeItemsPerPage,
    onGoToClick,
    userRole,
    onClickDeleteInviteButton,
    selectedEmail,
    itemsPerPage,
    inputPaginationValue,
    pages,
    currentPage,
    searchedInvites,
    result,
    isEdit,
    debouncedValue,
    isContentLoading,
    isFocus,
    count,
    isFetchingData,
    isDisableButton,
    isEmptyData,
    isSentSuccessPopup,
    isResentSuccessPopup,
    isHeaderPanel,
    isChecked,
    role,
    prevEmail,
    onChangeRoleValueHandler,
    onChangeCheckBoxHandler,
    setIsSentSuccessPopup,
    setIsResendSuccessPopup,
    onChangePage,
    onChangePagesAmount,
    onModalWindowCancelClickButtonHandler,
    onModalWindowToggleHandler,
    onFocusSearchHandler,
    onBlurHandler,
    onGetAllCompanyInvitationsHandler,
    onResendInvitationHandler,
  } = useInvitesState();

  useEffect(() => {
    !searchValue && onGetAllCompanyInvitationsHandler();
  }, [searchValue]);

  useEffect(() => {
    debouncedValue &&
      onGetAllCompanyInvitationsHandler({
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

  const isPaginationPanel =
    (searchValue && searchedInvites?.length) ||
    (!searchValue && result?.length);

  return (
    <Styled.Section>
      <DeleteModalWindow
        isLoading={isLoading}
        onCloseDeleteModalWindowHandler={onDeleteModalWindowToggle}
        onDeleteButtonClickHandler={onClickDeleteInviteButton}
        isDeleteModalWindowOpen={isDeleteModalWindowOpen}
        deleteItemName={`invite to ${selectedEmail}`}
      />
      <InviteCompanyOwnerModalWindow
        isLoading={isLoading}
        isDisableButton={isDisableButton}
        onCloseModalWindowHandler={onModalWindowCancelClickButtonHandler}
        onSaveButtonCLickHandler={formik.handleSubmit}
        onEnterCreateItemClick={onEnterCreatetInvite}
        isModalWindowOpen={isModalWindowOpen}
        headerText={isEdit ? 'Edit invitation' : 'Create invitation'}
        formikMeta={formik.getFieldMeta}
        formikProps={formik.getFieldProps}
        isEdit={isEdit}
        handleChange={formik.handleChange}
        onChangeCheckBoxHandler={onChangeCheckBoxHandler}
        onChangeRoleValueHandler={onChangeRoleValueHandler}
        isChecked={isChecked}
        selectValue={role}
        isCheckboxField={isEdit && formik.values.email !== prevEmail}
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
      ) : !searchValue &&
        !isFetchingData &&
        !isContentLoading &&
        isEmptyData ? (
        <EmptyData
          isUploadFile={false}
          buttonText="Create your invitation"
          firstSubtitle={Strings.invites.firstSubtitle}
          secondSubtitle={Strings.invites.secondSubtitle}
          title={Strings.invites.title}
          onClick={onModalWindowToggleHandler}
        />
      ) : (
        !isFetchingData &&
        isHeaderPanel && (
          <Styled.ContentWrapper>
            <HeaderPanelMaster
              onBlurHandler={onBlurHandler}
              onFocusSearchHandler={onFocusSearchHandler}
              onChangeSearchValueHandler={onChangeSearchValueHandler}
              searchValue={searchValue}
              onAddClickButtonHandler={onModalWindowToggleHandler}
              isGuard={false}
              isButton
              userRole={userRole}
            />
            {isContentLoading && isFocus ? (
              <Styled.LoaderWrapper>
                <LoaderComponent theme="preview" />
              </Styled.LoaderWrapper>
            ) : !isFetchingData && !isContentLoading ? (
              <>
                <TableInvites
                  onResendInvitationHandler={onResendInvitationHandler}
                  searchValue={searchValue}
                  searchedInvites={searchedInvites}
                  invites={result}
                  userRole={userRole}
                  onEditIconClickHandler={onEditIconClickHandler}
                  onDeleteIconClickHandler={onDeleteIconClickHandler}
                />
                {isPaginationPanel ? (
                  <PaginationPanel
                    pages={pages}
                    currentPage={currentPage}
                    onChangePage={onChangePage}
                    onChangeInputValue={onChangeInputValue}
                    onForwardClick={onForwardClick}
                    onBackwardClick={onBackwardClick}
                    onEnterGoToClick={onEnterGoToClick}
                    onChangeReceiptsPerPage={onChangeItemsPerPage}
                    receiptsPerPage={itemsPerPage}
                    inputPaginationValue={inputPaginationValue}
                    onGoToClick={onGoToClick}
                  />
                ) : null}
              </>
            ) : null}
          </Styled.ContentWrapper>
        )
      )}
    </Styled.Section>
  );
};
