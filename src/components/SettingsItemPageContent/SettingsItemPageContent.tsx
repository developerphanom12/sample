import { FC } from 'react';

import { HeaderPanelMaster } from '../HeaderPanelMaster';
import { LoaderComponent } from '../Loader';
import { PaginationPanel } from '../PaginationPanel';
import { TableSettings } from '../Table/TableSettings';
import { TableSettingsCompany } from '../Table/TableSettings/TableSettingsCompany';
import { SettingsItemPageContentStyle as Styled } from './SettingsItemPageContent.style';
import { ISettingsItemPageContentProps } from './types/settingsItemPageContent.types';

export const SettingsItemPageContent: FC<ISettingsItemPageContentProps> = (
  props
) => {
  const {
    currentPage,
    inputPaginationValue,
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
  } = props;
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
      ) : !isContentLoading ? (
        <div>
          {isMemeberList ? (
            <TableSettings
              searchValue={searchValue}
              searchedUsers={searchedUsers}
              members={members}
              userRole={userRole}
              onDeleteIconClickHandler={onDeleteIconClickHandler}
              onEditIconClickHandler={onEditIconClickHandler}
            />
          ) : (
            <TableSettingsCompany
              userRole={userRole}
              onDeleteIconClickHandler={onDeleteIconClickHandler}
              onEditIconClickHandler={onEditIconClickHandler}
            />
          )}
          {(searchValue && searchedUsers?.length) ||
          (!searchValue && members?.length) ? (
            <PaginationPanel
              pages={pages}
              currentPage={currentPage}
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
