import React from 'react';
import { format } from 'date-fns';

import { Icon } from 'components/Icons/Icons';

import { TableMasterItemStyles } from './TableIMasterItem.style';

interface TableMasterItemProps {
  categoryName: string;
  createdDate: string;
  categoryCreator: string;
  dateFormat: string;
  onDeleteIconHandler: () => Promise<void>;
  onEditIconHandler: () => Promise<void>;
}

export const TableMasterItem: React.FC<TableMasterItemProps> = (props) => {
  const {
    categoryCreator,
    categoryName,
    createdDate,
    dateFormat,
    onDeleteIconHandler,
    onEditIconHandler,
  } = props;

  return (
    <TableMasterItemStyles.Item>
      <TableMasterItemStyles.Action>
        <TableMasterItemStyles.ActionButton onClick={onEditIconHandler}>
          <Icon type="edit" />
        </TableMasterItemStyles.ActionButton>
        <TableMasterItemStyles.ActionButton onClick={onDeleteIconHandler}>
          <Icon type="remove" />
        </TableMasterItemStyles.ActionButton>
      </TableMasterItemStyles.Action>
      <TableMasterItemStyles.Column>
        <TableMasterItemStyles.NameWrapper>
          {categoryName}
        </TableMasterItemStyles.NameWrapper>
      </TableMasterItemStyles.Column>
      <TableMasterItemStyles.Column>
        {format(new Date(createdDate), dateFormat)}
      </TableMasterItemStyles.Column>
      <TableMasterItemStyles.Column>
        {categoryCreator}
      </TableMasterItemStyles.Column>
    </TableMasterItemStyles.Item>
  );
};
