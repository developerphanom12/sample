import React from 'react';

import { ReceiptsItem } from '../ReceiptsItem/ReceiptsItem';
import { IReceiptsItemsListProps } from '../types/receiptItem.types';

export const ReceiptsItemsList: React.FC<IReceiptsItemsListProps> = (props) => {
  const {
    date,
    status,
    customId,
    total,
    currency,
    dateFormat,
    receiptId,
    receiptIndex,
  } = props;
  return (
    <ReceiptsItem
      currency={currency}
      date={date}
      status={status}
      customId={customId}
      total={total}
      dateFormat={dateFormat}
      receiptId={receiptId}
      receiptIndex={receiptIndex}
    />
  );
};
