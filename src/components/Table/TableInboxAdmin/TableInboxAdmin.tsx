import React from 'react';

import { CheckboxItem } from 'components/Checkbox/Checkbox';

import { TableButton } from '../TableButton/TableButton';
import { TableInboxAdminItem } from './TableInboxAdminItem/TableInboxAdminItem';
import { TableInboxAdminStyles } from './TableInboxAdmin.style';

interface TableInboxAdminProps {
  isChecked: boolean;
}

export const TableInboxAdmin: React.FC<TableInboxAdminProps> = (props) => {
  const { isChecked } = props;
  return (
    <>
      <TableInboxAdminStyles.Head>
        <TableInboxAdminStyles.Checkbox>
          <CheckboxItem isChecked={isChecked} />
        </TableInboxAdminStyles.Checkbox>
        <TableInboxAdminStyles.View>View</TableInboxAdminStyles.View>
        <TableInboxAdminStyles.Publish>Publish</TableInboxAdminStyles.Publish>
        <TableInboxAdminStyles.Date>
          <TableButton>Date</TableButton>
        </TableInboxAdminStyles.Date>
        <TableInboxAdminStyles.Supplier>
          <TableButton>Supplier</TableButton>
        </TableInboxAdminStyles.Supplier>
        <TableInboxAdminStyles.Selector>
          <TableButton>Supplier Account</TableButton>
        </TableInboxAdminStyles.Selector>
        <TableInboxAdminStyles.Selector>
          <TableButton>Category</TableButton>
        </TableInboxAdminStyles.Selector>
        <TableInboxAdminStyles.Selector>
          <TableButton>VAT Code</TableButton>
        </TableInboxAdminStyles.Selector>
        <TableInboxAdminStyles.NumericCredentials>
          <TableButton>CUR</TableButton>
        </TableInboxAdminStyles.NumericCredentials>
        <TableInboxAdminStyles.NumericCredentials>
          <TableButton>Net</TableButton>
        </TableInboxAdminStyles.NumericCredentials>
        <TableInboxAdminStyles.NumericCredentials>
          <TableButton>VAT</TableButton>
        </TableInboxAdminStyles.NumericCredentials>
        <TableInboxAdminStyles.NumericCredentials>
          <TableButton>Total</TableButton>
        </TableInboxAdminStyles.NumericCredentials>
        <TableInboxAdminStyles.NumericCredentials>
          <TableButton>Paid</TableButton>
        </TableInboxAdminStyles.NumericCredentials>
      </TableInboxAdminStyles.Head>
      <TableInboxAdminItem isChecked={false} />
    </>
  );
};
