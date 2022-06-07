import React from 'react';

import { ReceiptsItem } from '../ReceiptsItem/ReceiptsItem';
import { IReceiptsItemsListProps } from '../types/receiptItem.types';

export const ReceiptsItemsList: React.FC<IReceiptsItemsListProps> = (props) => {
  const { date, status, supplier, total, currency, dateFormat } = props;
  return (
    <ReceiptsItem
      currency={currency}
      date={date}
      status={status}
      supplier={supplier}
      total={total}
      dateFormat={dateFormat}
    />
  );
};
