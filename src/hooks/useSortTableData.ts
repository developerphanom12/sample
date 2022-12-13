import { useCallback, useMemo, useState } from 'react';

import { getSortedItems } from 'services/utils';

interface IProps {
  items: IReceipt[];
}
export const useSortableData = (props: IProps) => {
  const { items } = props;

  const [sortField, setSortField] = useState<TReceiptKeys | ''>('');
  const [sortOrder, setSortOrder] = useState<'desc' | 'asc' | ''>('');

  const isSortNameType =
    sortField === 'category' ||
    sortField === 'supplier_account' ||
    sortField === 'currency';

  const sortedItems = useMemo(() => {
    const nullItems = sortField
      ? items.filter((item) => !item[sortField as TReceiptKeys])
      : [];

    const sortableItems = sortField
      ? items.filter((item) => item[sortField as TReceiptKeys])
      : items;

    if (sortField && sortOrder) {
      if (isSortNameType) {
        getSortedItems({
          sortOrder,
          sortField,
          sortableItems,
          sortType: 'fieldName',
          sortValue: sortField === 'currency' ? 'value' : 'name',
        });
      }
      if (sortField === 'receipt_date') {
        getSortedItems({
          sortOrder,
          sortField,
          sortableItems,
          sortType: 'date',
        });
      }

      getSortedItems({ sortableItems, sortField, sortOrder });
    }

    if (nullItems.length) {
      if (sortField === 'receipt_date') {
        return sortOrder === 'asc'
          ? sortableItems.concat(nullItems || [])
          : nullItems?.concat(sortableItems);
      } else {
        return sortOrder === 'asc'
          ? nullItems?.concat(sortableItems)
          : sortableItems.concat(nullItems || []);
      }
    }

    return sortableItems;
  }, [items, sortOrder, sortField]);

  const requestSort = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const columnName = event.currentTarget.id as TReceiptKeys;
      event.currentTarget.id !== sortField && setSortField(columnName);

      if (sortField === columnName && sortOrder === 'asc') {
        setSortOrder('desc');
      } else {
        setSortOrder('asc');
      }
    },
    [sortField, sortOrder]
  );

  return { items: sortedItems, requestSort, sortOrder, sortField };
};
function sortByFiledName() {
  throw new Error('Function not implemented.');
}
