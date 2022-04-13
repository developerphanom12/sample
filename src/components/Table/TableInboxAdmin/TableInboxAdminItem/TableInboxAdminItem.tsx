import React from 'react';

import { CheckboxItem } from 'components/Checkbox/Checkbox';
import { Icon } from 'components/Icons/Icons';

import { TableInboxAdminItemStyles } from './TableInboxAdminItem.style';

interface TableInboxAdminProps {
  isChecked: boolean;
}

export const TableInboxAdminItem: React.FC<TableInboxAdminProps> = (props) => {
  const { isChecked } = props;
  return (
    <TableInboxAdminItemStyles.Item>
      <TableInboxAdminItemStyles.Checkbox>
        <CheckboxItem isChecked={isChecked} />
      </TableInboxAdminItemStyles.Checkbox>
      <TableInboxAdminItemStyles.View>
        <Icon type='showPassword' />
      </TableInboxAdminItemStyles.View>
      <TableInboxAdminItemStyles.Publish>
        <Icon type='checkmark' />
      </TableInboxAdminItemStyles.Publish>
      <TableInboxAdminItemStyles.Date>
        21-Feb-2022
      </TableInboxAdminItemStyles.Date>
      <TableInboxAdminItemStyles.Supplier>
        Starbucks
      </TableInboxAdminItemStyles.Supplier>
      <TableInboxAdminItemStyles.Selector>
        <TableInboxAdminItemStyles.SelectorMock />
      </TableInboxAdminItemStyles.Selector>
      <TableInboxAdminItemStyles.Selector>
        <TableInboxAdminItemStyles.SelectorMock />
      </TableInboxAdminItemStyles.Selector>
      <TableInboxAdminItemStyles.Selector>
        <TableInboxAdminItemStyles.SelectorMock />
      </TableInboxAdminItemStyles.Selector>
      <TableInboxAdminItemStyles.NumericCredentials>
        GBR
      </TableInboxAdminItemStyles.NumericCredentials>
      <TableInboxAdminItemStyles.NumericCredentials>
        2.33
      </TableInboxAdminItemStyles.NumericCredentials>
      <TableInboxAdminItemStyles.NumericCredentials>
        0.67
      </TableInboxAdminItemStyles.NumericCredentials>
      <TableInboxAdminItemStyles.NumericCredentials>
        3.00
      </TableInboxAdminItemStyles.NumericCredentials>
      <TableInboxAdminItemStyles.PaidCheck>
        <CheckboxItem isChecked={isChecked} />
      </TableInboxAdminItemStyles.PaidCheck>
    </TableInboxAdminItemStyles.Item>
  );
};
