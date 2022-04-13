import React from 'react';

import { TableButton } from '../TableButton/TableButton';
import { TableMasterItem } from './TableMasterItem/TableMasterItem';
import { TableMasterStyles } from './TableMaster.style';

interface TableMasterProps {}

export const TableMaster: React.FC<TableMasterProps> = (props) => (
  <>
    <TableMasterStyles.Head>
      <TableMasterStyles.Actions>Actions</TableMasterStyles.Actions>
      <TableMasterStyles.Column>
        <TableButton>Type</TableButton>
      </TableMasterStyles.Column>
      <TableMasterStyles.Column>
        <TableMasterStyles.Column>
          <TableButton>Created On</TableButton>
        </TableMasterStyles.Column>
      </TableMasterStyles.Column>
      <TableMasterStyles.Column>
        <TableMasterStyles.Column>
          <TableButton>Created By</TableButton>
        </TableMasterStyles.Column>
      </TableMasterStyles.Column>
    </TableMasterStyles.Head>
    <TableMasterItem />
  </>
);
