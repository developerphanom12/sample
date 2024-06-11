import React from 'react';
import { format } from 'date-fns';

import { getCorrectCustomId } from 'services/utils';

import { CheckboxItem } from 'components/Checkbox/Checkbox';
import { StatusLabel } from 'components/StatusLabel/StatusLabel';

import { TableItemStyles as Styled } from '../../TableGlobalStyles';
import { TABLE_GRID_MARKUP } from '../ExpenseReport.constants';

import { useExpenseReportItemState } from './ExpenseReportItems.state';

interface TableInboxAdminProps {
  isVisited?: boolean;
  onCheckedItemHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onCheckedPaidHandler: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => Promise<void>;
  onCheckedPublishMockFuncHandler: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  isChecked: boolean;
  tax: number | null;
  date: Date;
  supplier: string | null;
  supplierAccount?: string | null;
  category?: string | null;
  vatCode: string | null;
  currency: string | null;
  net: number | null;
  total: number | null;
  status: string;
  receiptId: string;
  receiptIndex: number;
  customId: string;
  publishStatus: boolean;
  paymentStatus: boolean;
  dateFormat: string;
}

export const SalesInvoicesItem: React.FC<TableInboxAdminProps> = (props) => {
  const {
    isChecked,
    category,
    currency,
    date,
    net,
    status,
    supplier,
    supplierAccount,
    total,
    vatCode,
    tax,
    receiptId,
    receiptIndex,
    customId,
    paymentStatus,
    publishStatus,
    dateFormat,
    onCheckedPaidHandler,
    onCheckedItemHandler,
    onCheckedPublishMockFuncHandler,
  } = props;

  const { onReceiptDetailsClickHandler } = useExpenseReportItemState({
    itemIndex: receiptIndex,
  });

  return (
    <Styled.Item templateColumns={TABLE_GRID_MARKUP}>
      <Styled.Checkbox>
        <CheckboxItem
          name={receiptId}
          isChecked={isChecked}
          onChange={onCheckedItemHandler}
        />
      </Styled.Checkbox>
      <Styled.View id={receiptId} onClick={onReceiptDetailsClickHandler}>
        <Styled.Link>{getCorrectCustomId(customId)}</Styled.Link>
      </Styled.View>
      <Styled.Selector>
        {!!date
          ? format(new Date(date), dateFormat)
          : format(new Date(), dateFormat)}
      </Styled.Selector>
      <Styled.Selector>
        <Styled.ValueWrapper>{supplier || '---'}</Styled.ValueWrapper>
      </Styled.Selector>
      <Styled.Selector>
        <Styled.ValueWrapper>{supplierAccount || '---'}</Styled.ValueWrapper>
      </Styled.Selector>
      <Styled.Selector>
        <Styled.ValueWrapper>{category || '---'}</Styled.ValueWrapper>
      </Styled.Selector>
      <Styled.Selector>
        <Styled.ValueWrapper>{vatCode || '---'}</Styled.ValueWrapper>
      </Styled.Selector>
      <Styled.Selector>{currency || '---'}</Styled.Selector>
      <Styled.Selector>
        <Styled.ValueWrapper>{net || '00.00'}</Styled.ValueWrapper>
      </Styled.Selector>
      <Styled.Selector>
        <Styled.ValueWrapper>{tax || '00.00'}</Styled.ValueWrapper>
      </Styled.Selector>
      <Styled.Selector>
        <Styled.ValueWrapper>{total || '00.00'}</Styled.ValueWrapper>
      </Styled.Selector>
      <Styled.Checkbox isBorder isHidden={true}>
        <CheckboxItem
          isChecked={publishStatus}
          onChange={onCheckedPublishMockFuncHandler}
          name={receiptId}
        />
      </Styled.Checkbox>
      <Styled.Checkbox isBorder>
        <CheckboxItem
          isChecked={paymentStatus}
          onChange={onCheckedPaidHandler}
          name={receiptId}
        />
      </Styled.Checkbox>
      <Styled.Status>
        <StatusLabel status={status as Statuses} />
      </Styled.Status>
    </Styled.Item>
  );
};
