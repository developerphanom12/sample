import React from 'react';

import { CheckboxItem } from 'components/Checkbox/Checkbox';
import { Icon } from 'components/Icons/Icons';
import { StatusLabel } from 'components/StatusLabel/StatusLabel';

import { TableInboxItemStyles } from './TableInboxItem.style';

interface TableInboxItemProps {
  isChecked: boolean;
  onChecked?: (event: React.FormEvent<HTMLInputElement>) => void;
  onShowClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

export const TableInboxItem: React.FC<TableInboxItemProps> = (props) => {
  const { isChecked, onChecked, onShowClick } = props;
  return (
    <TableInboxItemStyles.Item>
      <TableInboxItemStyles.StaticBlock>
        <TableInboxItemStyles.Checkbox onChange={onChecked}>
          <CheckboxItem isChecked={isChecked} />
        </TableInboxItemStyles.Checkbox>
        <TableInboxItemStyles.View onClick={onShowClick}>
          <Icon type="showPassword" />
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
        <StatusLabel status="review" />
      </TableInboxItemStyles.ColumnStatus>
      <TableInboxItemStyles.ColumnDepartures>
        <StatusLabel status="accepted" text="14-Mar-2022, 11:30:00" />
      </TableInboxItemStyles.ColumnDepartures>
      <TableInboxItemStyles.ColumnDepartures>
        <StatusLabel status="accepted" text="N/A" />
      </TableInboxItemStyles.ColumnDepartures>
    </TableInboxItemStyles.Item>
  );
};
