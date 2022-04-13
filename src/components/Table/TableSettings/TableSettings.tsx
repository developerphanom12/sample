import React from 'react';

import { TableSettingsStyles } from './TableSettings.style';
import { TableSettingsItem } from './TableSettingsItem/TableSettingsItem';
import { TableButton } from '../TableButton/TableButton';

interface TableSettingsProps {}

export const TableSettings: React.FC<TableSettingsProps> = (props) => (
  <>
    <TableSettingsStyles.Head>
      <TableSettingsStyles.Actions>Actions</TableSettingsStyles.Actions>
      <TableSettingsStyles.Column>
        <TableButton>Name</TableButton>
      </TableSettingsStyles.Column>
      <TableSettingsStyles.Column>
        <TableButton>Email</TableButton>
      </TableSettingsStyles.Column>
      <TableSettingsStyles.Column>
        <TableButton>Created On</TableButton>
      </TableSettingsStyles.Column>
      <TableSettingsStyles.Column>
        <TableButton>Created By</TableButton>
      </TableSettingsStyles.Column>
    </TableSettingsStyles.Head>
    <TableSettingsItem />
  </>
);
