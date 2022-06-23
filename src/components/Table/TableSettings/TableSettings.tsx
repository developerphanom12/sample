import React from 'react';

import { TableSettingsStyles } from './TableSettings.style';
import { TableSettingsItem } from './TableSettingsItem/TableSettingsItem';
import { TableButton } from '../TableButton/TableButton';

export const TableSettings: React.FC<TableSettingsProps> = (props) => {
  const { onDeleteIconClickHandler, onEditIconClickHandler, userRole } = props;
  return (
    <>
      <TableSettingsStyles.Head>
        {(userRole === 'owner' || userRole === 'admin') && (
          <TableSettingsStyles.Actions>Actions</TableSettingsStyles.Actions>
        )}
        <TableSettingsStyles.Column>
          <TableButton>Name</TableButton>
        </TableSettingsStyles.Column>
        <TableSettingsStyles.Column>
          <TableButton>Email</TableButton>
        </TableSettingsStyles.Column>
        <TableSettingsStyles.Column>
          <TableButton>Role</TableButton>
        </TableSettingsStyles.Column>
        <TableSettingsStyles.Column>
          <TableButton>Created On</TableButton>
        </TableSettingsStyles.Column>
        <TableSettingsStyles.Column>
          <TableButton>Created By</TableButton>
        </TableSettingsStyles.Column>
      </TableSettingsStyles.Head>
      <TableSettingsItem
        onDeleteIconClickHandler={onDeleteIconClickHandler}
        onEditIconClickHandler={onEditIconClickHandler}
        userRole={userRole}
      />
    </>
  );
};
