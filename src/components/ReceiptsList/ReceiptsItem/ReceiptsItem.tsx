import React from 'react';

import { getCorrectCustomId, getFormattedDate } from 'services/utils';

import { ReceiptsItemStyles } from './ReceiptsItem.style';
import { StatusLabel } from '../../StatusLabel/StatusLabel';
import { IReceiptsItemProps } from '../types';
import { useReceiptsItemState } from './ReceiptsItem.state';

export const ReceiptsItem: React.FC<IReceiptsItemProps> = (props) => {
  const {
    onItemClick,
    dateFormat,
    date,
    status,
    customId,
    total,
    currency,
    receiptId,
    receiptIndex,
  } = props;

  const { onReceiptDetailsClickHandler } = useReceiptsItemState({
    receiptId,
  });

  return (
    <ReceiptsItemStyles.Wrapper onClick={onItemClick}>
      <ReceiptsItemStyles.PaymentBlock>
        <ReceiptsItemStyles.SupplierItem
          id={receiptId}
          onClick={onReceiptDetailsClickHandler}
        >
          <ReceiptsItemStyles.Link>
            {getCorrectCustomId(customId) || '---'}
          </ReceiptsItemStyles.Link>
        </ReceiptsItemStyles.SupplierItem>
        <ReceiptsItemStyles.Item>{`${currency || '---'} ${
          total || '---'
        }`}</ReceiptsItemStyles.Item>
      </ReceiptsItemStyles.PaymentBlock>
      <ReceiptsItemStyles.StatusBlock>
        <StatusLabel status={status} />
        <ReceiptsItemStyles.Item>
          {date ? getFormattedDate(date, dateFormat) : '---'}
        </ReceiptsItemStyles.Item>
      </ReceiptsItemStyles.StatusBlock>
    </ReceiptsItemStyles.Wrapper>
  );
};
