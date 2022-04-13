import React from 'react';

import { Icon } from 'components/Icons/Icons';

import { TableMasterItemStyles } from './TableIMasterItem.style';

interface TableMasterItemProps {
  onDeleteClick?: (event: React.MouseEvent<HTMLElement>) => void;
  onEditClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

export const TableMasterItem: React.FC<TableMasterItemProps> = (props) => {
  const { onEditClick, onDeleteClick } = props;
  return (
    <TableMasterItemStyles.Item>
      <TableMasterItemStyles.Action>
        <TableMasterItemStyles.ActionButton onClick={onEditClick}>
          <Icon type='edit' />
        </TableMasterItemStyles.ActionButton>
        <TableMasterItemStyles.ActionButton onClick={onDeleteClick}>
          <Icon type='remove' />
        </TableMasterItemStyles.ActionButton>
      </TableMasterItemStyles.Action>
      <TableMasterItemStyles.Column>Type</TableMasterItemStyles.Column>
      <TableMasterItemStyles.Column>Created On</TableMasterItemStyles.Column>
      <TableMasterItemStyles.Column>Created By</TableMasterItemStyles.Column>
    </TableMasterItemStyles.Item>
  );
};
