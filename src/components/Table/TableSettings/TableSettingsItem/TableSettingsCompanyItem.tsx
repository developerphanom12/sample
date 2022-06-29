import React from 'react';

import { Icon } from 'components/Icons/Icons';

import { TableSettingsItemStyles as Styled } from './TableSettingsItem.style';

export const TableSettingsCompanyItem: React.FC<
  TableCompanySettingsItemProps
> = (props) => {
  const {
    onEditIconClickHandler,
    onDeleteIconClickHandler,
    userRole,
    companyName,
  } = props;
  return (
    <Styled.Item>
      {(userRole === 'owner' || userRole === 'admin') && (
        <Styled.Action>
          <Styled.ActionButton onClick={() => onEditIconClickHandler('1')}>
            <Icon type="edit" />
          </Styled.ActionButton>
          <Styled.ActionButton onClick={() => onDeleteIconClickHandler('1')}>
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
