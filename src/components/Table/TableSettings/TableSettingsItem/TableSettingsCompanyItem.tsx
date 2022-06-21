import React from 'react';

import { Icon } from 'components/Icons/Icons';

import { TableSettingsItemStyles as Styled } from './TableSettingsItem.style';

export const TableSettingsCompanyItem: React.FC<TableSettingsItemProps> = (
  props
) => {
  const { onEditIconClickHandler, onDeleteIconClickHandler, userRole } = props;
  return (
    <Styled.Item>
      {userRole === 'owner' && (
        <Styled.Action>
          <Styled.ActionButton onClick={() => onEditIconClickHandler('1')}>
            <Icon type="edit" />
          </Styled.ActionButton>
          <Styled.ActionButton onClick={() => onDeleteIconClickHandler('1')}>
            <Icon type="remove" />
          </Styled.ActionButton>
        </Styled.Action>
      )}
      <Styled.Column>Company</Styled.Column>
      <Styled.Column>Created On</Styled.Column>
      <Styled.Column>Created By</Styled.Column>
    </Styled.Item>
  );
};
