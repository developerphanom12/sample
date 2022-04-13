import React from 'react';

import { CheckboxItem } from 'components/Checkbox/Checkbox';
import { Icon } from 'components/Icons/Icons';
import { StatusLabel } from 'components/StatusLabel/StatusLabel';

import { TableInboxItemStyles } from './TableInboxItem.style';

interface TableInboxItemProps {
  isChecked: boolean;
}

export const TableInboxItem: React.FC<TableInboxItemProps> = (props) => {
  const { isChecked } = props;
  return (
    <TableInboxItemStyles.Item>
      <TableInboxItemStyles.StaticBlock>
        <TableInboxItemStyles.Checkbox>
          <CheckboxItem isChecked={isChecked} />
        </TableInboxItemStyles.Checkbox>
        <TableInboxItemStyles.View>
          <Icon type='showPassword' />
        </TableInboxItemStyles.View>
      </TableInboxItemStyles.StaticBlock>
      <TableInboxItemStyles.ColumnID>ID</TableInboxItemStyles.ColumnID>
      <TableInboxItemStyles.ColumnCustomer>
        Customer
      </TableInboxItemStyles.ColumnCustomer>
      <TableInboxItemStyles.ColumnDateOnReceipt>
        Date on Receipt
      </TableInboxItemStyles.ColumnDateOnReceipt>
      <TableInboxItemStyles.ColumnStatus>
        <StatusLabel colors='review' text='Review' />
      </TableInboxItemStyles.ColumnStatus>
      <TableInboxItemStyles.ColumnDepartures>
        <StatusLabel colors='departures' text='14-Mar-2022, 11:30:00' />
      </TableInboxItemStyles.ColumnDepartures>
      <TableInboxItemStyles.ColumnDepartures>
        <StatusLabel colors='departures' text='N/A' />
      </TableInboxItemStyles.ColumnDepartures>
    </TableInboxItemStyles.Item>
  );
};
