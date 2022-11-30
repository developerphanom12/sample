import { useState } from 'react';

export const useSortTable = () => {
  const [sortField, setSortField] = useState('created');
  const [sortOrder, setSortOrder] = useState<'ASC' | 'DESC'>('DESC');

  const setSortData = (columnName: string) => {
    columnName !== sortField && setSortField(columnName);

    if (sortField === columnName && sortOrder === 'ASC') {
      setSortOrder('DESC');
      return 'DESC';
    } else {
      setSortOrder('ASC');
      return 'ASC';
    }
  };

  return { setSortData, sortOrder, sortField };
};
