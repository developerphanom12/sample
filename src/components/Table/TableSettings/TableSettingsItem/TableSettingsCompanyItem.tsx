import React from 'react';

import { Icon } from 'components/Icons/Icons';

import { TableSettingsItemStyles } from './TableSettingsItem.style';

interface TableMasterItemProps {
  onDeleteClick?: (event: React.MouseEvent<HTMLElement>) => void;
  onEditClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

export const TableSettingsCompanyItem: React.FC<TableMasterItemProps> = (
  props
) => {
  const { onEditClick, onDeleteClick } = props;
  return (
    <TableSettingsItemStyles.Item>
      <TableSettingsItemStyles.Action>
        <TableSettingsItemStyles.ActionButton onClick={onEditClick}>
          <Icon type='edit' />
        </TableSettingsItemStyles.ActionButton>
        <TableSettingsItemStyles.ActionButton onClick={onDeleteClick}>
          <Icon type='remove' />
        </TableSettingsItemStyles.ActionButton>
      </TableSettingsItemStyles.Action>
      <TableSettingsItemStyles.Column>Company</TableSettingsItemStyles.Column>
      <TableSettingsItemStyles.Column>Name</TableSettingsItemStyles.Column>
      <TableSettingsItemStyles.Column>Email</TableSettingsItemStyles.Column>
      <TableSettingsItemStyles.Column>
        Created On
      </TableSettingsItemStyles.Column>
      <TableSettingsItemStyles.Column>
        Created By
      </TableSettingsItemStyles.Column>
    </TableSettingsItemStyles.Item>
  );
};
