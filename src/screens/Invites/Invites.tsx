import { useEffect } from 'react';

import { HeaderPanelMaster } from 'components/HeaderPanelMaster';
import { TableInvites } from 'components/Table/TableInvites';
import { PaginationPanel } from 'components/PaginationPanel';
import { DeleteModalWindow } from 'components/DeleteModalWindow';
import { InsertUserModalWindow } from 'components/InsertUserModalWindow';
import { LoaderComponent } from 'components/Loader';
import { EmptyData } from 'components/EmptyData';

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
    onSendInviteToCreateCompanyHandler,
    onEditInviteHandler,
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
    modalFields,
    count,
    isFetchingData,
    isDisableButton,
    isEmptyData,
    isSentSuccessPopup,
    isResentSuccessPopup,
    role,
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
        deleteItemName={`invite ${selectedEmail}`}
      />
      <InsertUserModalWindow
        modalFields={modalFields}
        isLoading={isLoading}
        isDisableButton={isDisableButton}
        onCloseModalWindowHandler={onModalWindowCancelClickButtonHandler}
        onSaveButtonCLickHandler={formik.handleSubmit}
        onEnterCreateItemClick={onEnterCreatetInvite}
        isModalWindowOpen={isModalWindowOpen}
        headerText="Create invitation"
        formikMeta={formik.getFieldMeta}
        formikProps={formik.getFieldProps}
        isEdit={isEdit}
        isInvitation={false}
      />
      {!result?.length &&
      !searchValue &&
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
      )}
    </Styled.Section>
  );
};
