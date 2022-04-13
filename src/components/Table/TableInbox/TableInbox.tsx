import React from 'react';

import { CheckboxItem } from 'components/Checkbox/Checkbox';

import { TableInboxStyles } from './TableInbox.style';
import { TableButton } from '../TableButton/TableButton';
import { TableInboxItem } from './TableInboxItem/TableInboxItem';

interface TableInboxProps {
  isChecked: boolean;
}

export const TableInbox: React.FC<TableInboxProps> = (props) => {
  const { isChecked } = props;
  return (
    <>
      <TableInboxStyles.Head>
        <TableInboxStyles.StaticBlock>
          <TableInboxStyles.Checkbox>
            <CheckboxItem isChecked={isChecked} />
          </TableInboxStyles.Checkbox>
          <TableInboxStyles.View>View</TableInboxStyles.View>
        </TableInboxStyles.StaticBlock>
        <TableInboxStyles.ColumnID>
          <TableButton>ID</TableButton>
        </TableInboxStyles.ColumnID>
        <TableInboxStyles.ColumnCustomer>
          <TableButton>Customer</TableButton>
        </TableInboxStyles.ColumnCustomer>
        <TableInboxStyles.ColumnDateOnReceipt>
          <TableButton>Date on Receipt</TableButton>
        </TableInboxStyles.ColumnDateOnReceipt>
        <TableInboxStyles.ColumnStatus>
          <TableButton>Status</TableButton>
        </TableInboxStyles.ColumnStatus>
        <TableInboxStyles.ColumnDepartures>
          <TableButton>Arrived on</TableButton>
        </TableInboxStyles.ColumnDepartures>
        <TableInboxStyles.ColumnDepartures>
          <TableButton>Departed on</TableButton>
        </TableInboxStyles.ColumnDepartures>
      </TableInboxStyles.Head>
      <TableInboxItem isChecked />
    </>
  );
};
