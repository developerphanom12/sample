import React from 'react';

import { Icon } from 'components/Icons/Icons';

import { TableSettingsItemStyles as Styled } from './TableSettingsItem.style';
import { useTableSettingsItemState } from './TableSettingsItem.state';

export const TableSettingsCompanyItem: React.FC<
  TableCompanySettingsItemProps
> = (props) => {
  const {
    onEditIconClickHandler,
    onDeleteIconClickHandler,
    userRole,
    companyId,
    companyName,
    isCompanyTable,
  } = props;

  const { onClickDeleteIconHandler, onClickEditIconHandler } =
    useTableSettingsItemState({
      itemId: companyId,
      onDeleteIconClickHandler,
      onEditIconClickHandler,
    });
  return (
    <Styled.Item isCompanyTable={isCompanyTable}>
      {(userRole === 'owner' || userRole === 'admin') && (
        <Styled.Action>
          <Styled.ActionButton onClick={onClickEditIconHandler}>
            <Icon type="edit" />
          </Styled.ActionButton>
          <Styled.ActionButton onClick={onClickDeleteIconHandler}>
            <Icon type="remove" />
          </Styled.ActionButton>
        </Styled.Action>
      )}
      <Styled.Column>{companyName}</Styled.Column>
      <Styled.Column>Created On</Styled.Column>
      <Styled.Column>Created By</Styled.Column>
    </Styled.Item>
  );
};
