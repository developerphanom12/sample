import React from 'react';

import { Icon } from 'components/Icons/Icons';

import { TableSettingsItemStyles } from './TableSettingsItem.style';

export const TableSettingsItem: React.FC<TableSettingsItemProps> = (props) => {
  const { onDeleteIconClickHandler, onEditIconClickHandler, userRole } = props;
  return (
    <TableSettingsItemStyles.Item>
      {userRole === 'owner' && (
        <TableSettingsItemStyles.Action>
          <TableSettingsItemStyles.ActionButton
            onClick={() => onEditIconClickHandler('1')}
          >
            <Icon type="edit" />
          </TableSettingsItemStyles.ActionButton>
          <TableSettingsItemStyles.ActionButton
            onClick={() => onDeleteIconClickHandler('1')}
          >
            <Icon type="remove" />
          </TableSettingsItemStyles.ActionButton>
        </TableSettingsItemStyles.Action>
      )}

      <TableSettingsItemStyles.Column>Name</TableSettingsItemStyles.Column>
      <TableSettingsItemStyles.Column>Email</TableSettingsItemStyles.Column>
      <TableSettingsItemStyles.Column>Role</TableSettingsItemStyles.Column>
      <TableSettingsItemStyles.Column>
        Created On
      </TableSettingsItemStyles.Column>
      <TableSettingsItemStyles.Column>
        Created By
      </TableSettingsItemStyles.Column>
    </TableSettingsItemStyles.Item>
  );
};
