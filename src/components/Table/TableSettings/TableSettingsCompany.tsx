import React from 'react';

import { TableSettingsStyles } from './TableSettings.style';
import { TableSettingsCompanyItem } from './TableSettingsItem/TableSettingsCompanyItem';
import { TableButton } from '../TableButton/TableButton';

interface TableSettingsProps {}

export const TableSettingsCompany: React.FC<TableSettingsProps> = (props) => (
  <>
    <TableSettingsStyles.Head>
      <TableSettingsStyles.Actions>Actions</TableSettingsStyles.Actions>
      <TableSettingsStyles.Column>
        <TableButton>Company</TableButton>
      </TableSettingsStyles.Column>
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
    <TableSettingsCompanyItem />
  </>
);
