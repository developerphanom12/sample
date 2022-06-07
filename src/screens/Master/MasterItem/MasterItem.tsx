import { FC } from 'react';

import { TableMasterItem } from 'components/Table/TableMaster/TableMasterItem';

import { useMasterItemState } from './MasterItem.state';

interface MasterItemProps {
  categoryId: string;
  categoryName: string;
  createdDate: string;
  categoryCreator: string;
  dateFormat: string;
  onDeleteIconClickHandler: (itemId: string) => Promise<void>;
  onEditIconClickHandler: (itemId: string) => Promise<void>;
}

export const MasterItem: FC<MasterItemProps> = (props) => {
  const {
    categoryCreator,
    categoryId,
    categoryName,
    createdDate,
    dateFormat,
    onDeleteIconClickHandler,
    onEditIconClickHandler,
  } = props;

  const { onDeleteIconHandler, onEditIconHandler } = useMasterItemState({
    categoryId,
    onDeleteIconClickHandler,
    onEditIconClickHandler,
  });
  return (
    <TableMasterItem
      categoryName={categoryName}
      createdDate={createdDate}
      categoryCreator={categoryCreator}
      dateFormat={dateFormat}
      onDeleteIconHandler={onDeleteIconHandler}
      onEditIconHandler={onEditIconHandler}
    />
  );
};
