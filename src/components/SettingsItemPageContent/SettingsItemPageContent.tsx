import { FC } from 'react';

import { HeaderPanelMaster } from '../HeaderPanelMaster';
import { PaginationPanel } from '../PaginationPanel';
import { TableSettings } from '../Table/TableSettings';
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
    pages,
    receiptsPerPage,
    searchValue,
    isGuard,
    userRole,
  } = props;
  return (
    <Styled.ContentWrapper>
      <HeaderPanelMaster
        onChangeSearchValueHandler={onChangeSearchValueHandler}
        searchValue={searchValue}
        onAddClickButtonHandler={onAddClickButtonHandler}
        isGuard={isGuard}
        userRole={userRole}
      />
      <TableSettings
        userRole={userRole}
        onDeleteIconClickHandler={onDeleteIconClickHandler}
        onEditIconClickHandler={onEditIconClickHandler}
      />
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
    </Styled.ContentWrapper>
  );
};
