import { FC } from 'react';

import { HeaderPanelMaster } from '../HeaderPanelMaster';
import { LoaderComponent } from '../Loader';
import { PaginationPanel } from '../PaginationPanel';
import { SettingsItemPageContentStyle as Styled } from './SettingsItemPageContent.style';
import { Table } from './Table';
import { ISettingsItemPageContentProps } from './types/settingsItemPageContent.types';

export const SettingsItemPageContent: FC<ISettingsItemPageContentProps> = (
  props
) => {
  const {
    currentPage,
    inputPaginationValue,
    searchedCompanies,
    onAddClickButtonHandler,
    onBackwardClick,
    onChangeInputValue,
    onChangeReceiptsPerPage,
    onChangeSearchValueHandler,
    onDeleteIconClickHandler,
    onEditIconClickHandler,
    onEnterGoToClick,
    onForwardClick,
    onGoToClick,
    onBlurHandler,
    onFocusSearchHandler,
    onChangePage,
    onResendInvitationHandler,
    searchedUsers,
    isFocus,
    pages,
    receiptsPerPage,
    searchValue,
    isGuard,
    userRole,
    members,
    isMemeberList,
    isContentLoading,
    isFetchingData,
    companies,
  } = props;

  const isPaginationPanel = isMemeberList
    ? (searchValue && searchedUsers?.length) ||
      (!searchValue && members?.length)
    : (searchValue && searchedCompanies?.length) ||
      (!searchValue && companies?.length);

  return (
    <Styled.ContentWrapper>
      <HeaderPanelMaster
        onBlurHandler={onBlurHandler}
        onFocusSearchHandler={onFocusSearchHandler}
        onChangeSearchValueHandler={onChangeSearchValueHandler}
        searchValue={searchValue}
        onAddClickButtonHandler={onAddClickButtonHandler}
        isGuard={isGuard}
        userRole={userRole}
      />
      {isContentLoading && isFocus ? (
        <Styled.LoaderWrapper>
          <LoaderComponent theme="preview" />
        </Styled.LoaderWrapper>
      ) : !isFetchingData && !isContentLoading ? (
        <div>
          <Table
            onResendInvitationHandler={onResendInvitationHandler}
            searchedCompanies={searchedCompanies}
            isMemeberList={isMemeberList}
            searchValue={searchValue}
            searchedUsers={searchedUsers}
            members={members}
            userRole={userRole}
            onDeleteIconClickHandler={onDeleteIconClickHandler}
            onEditIconClickHandler={onEditIconClickHandler}
            companies={companies}
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
              onChangeReceiptsPerPage={onChangeReceiptsPerPage}
              receiptsPerPage={receiptsPerPage}
              inputPaginationValue={inputPaginationValue}
              onGoToClick={onGoToClick}
            />
          ) : null}
        </div>
      ) : null}
    </Styled.ContentWrapper>
  );
};
