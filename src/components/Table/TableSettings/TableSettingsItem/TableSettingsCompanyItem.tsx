import React from 'react';

import { Icon } from 'components/Icons/Icons';

import { TableSettingsItemStyles as Styled } from './TableSettingsItem.style';

interface TableMasterItemProps {
  onDeleteClick?: (event: React.MouseEvent<HTMLElement>) => void;
  onEditClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

export const TableSettingsCompanyItem: React.FC<TableMasterItemProps> = (
  props
) => {
  const { onEditClick, onDeleteClick } = props;
  return (
    <Styled.Item>
      <Styled.Action>
        <Styled.ActionButton onClick={onEditClick}>
          <Icon type="edit" />
        </Styled.ActionButton>
        <Styled.ActionButton onClick={onDeleteClick}>
          <Icon type="remove" />
        </Styled.ActionButton>
      </Styled.Action>
      <Styled.Column>Company</Styled.Column>
      <Styled.Column>Created On</Styled.Column>
      <Styled.Column>Created By</Styled.Column>
    </Styled.Item>
  );
};
