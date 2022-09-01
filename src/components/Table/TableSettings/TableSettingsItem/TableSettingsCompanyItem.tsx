import React from 'react';

import { Icon } from 'components/Icons/Icons';

import { TableSettingsItemStyles as Styled } from './TableSettingsItem.style';
import { useTableSettingsItemState } from './TableSettingsItem.state';

import { getFormattedDate } from 'services/utils';

export const TableSettingsCompanyItem: React.FC<
  TableCompanySettingsItemProps
> = (props) => {
  const {
    onEditIconClickHandler,
    onDeleteIconClickHandler,
    dateFormat,
    createdAt,
    createdBy,
    userRole,
    companyId,
    companyName,
    isCompanyTable,
    creatorRole,
    creatorId,
  } = props;

  const { onClickDeleteIconHandler, onClickEditIconHandler } =
    useTableSettingsItemState({
      itemId: companyId,
      onDeleteIconClickHandler,
      onEditIconClickHandler,
    });
  const isHideDeleteButton =
    userRole?.id === creatorId && creatorRole === 'owner';
  return (
    <Styled.Item isCompanyTable={isCompanyTable}>
      {userRole?.role === 'user' ? null : (
        <Styled.Action>
          <Styled.ActionButton onClick={onClickEditIconHandler}>
            <Icon type="edit" />
          </Styled.ActionButton>
          {isHideDeleteButton ? null : (
            <Styled.ActionButton onClick={onClickDeleteIconHandler}>
              <Icon type="remove" />
            </Styled.ActionButton>
          )}
        </Styled.Action>
      )}
      <Styled.Column>{companyName}</Styled.Column>
      <Styled.Column>{getFormattedDate(createdAt, dateFormat)}</Styled.Column>
      <Styled.Column>{createdBy}</Styled.Column>
    </Styled.Item>
  );
};
