import React from 'react';

import { getFormattedDate } from 'services/utils';

import { ReceiptsItemStyles } from './ReceiptsItem.style';
import { StatusLabel } from '../../StatusLabel/StatusLabel';
import { IReceiptsItemProps } from '../types';

export const ReceiptsItem: React.FC<IReceiptsItemProps> = (props) => {
  const { onItemClick, dateFormat, date, status, supplier, total, currency } =
    props;

  return (
    <ReceiptsItemStyles.Wrapper onClick={onItemClick}>
      <ReceiptsItemStyles.PaymentBlock>
        <ReceiptsItemStyles.SupplierItem>
          {supplier || '---'}
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
