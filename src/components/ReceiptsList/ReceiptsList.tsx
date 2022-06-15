import React from 'react';
import { ActionMeta } from 'react-select';

import emptyDataSrc from 'assets/icons/empty-receipts.png';

import { ReceiptsListStyles as Styled } from './ReceiptsList.style';
import { ReceiptsItemsList } from './ReceiptsItemsList';
import { ReceiptsSelects } from './ReceiptsSelects/ReceiptsSelects';
import { LoaderComponent } from '../Loader';

interface IReceiptsListProps {
  lastReceipts?: IReceipt[];
  countPerTimeFilter?: number;
  timeFilterOptions: {
    value: string;
    label: string;
  }[];
  onChangeCategoryFieldHandler: (
    newValue: unknown,
    actionMeta: ActionMeta<unknown>
  ) => void;
  dateFormat: string;
  isContentLoading: boolean;
}

export const ReceiptsList: React.FC<IReceiptsListProps> = (props) => {
  const {
    lastReceipts,
    timeFilterOptions,
    countPerTimeFilter,
    dateFormat,
    isContentLoading,
    onChangeCategoryFieldHandler,
  } = props;

  return (
    <Styled.Container>
      <Styled.HeaderWrapper>
        <Styled.Title>Receipts List</Styled.Title>
        <ReceiptsSelects
          timeFilterOptions={timeFilterOptions}
          onChangeCategoryFieldHandler={onChangeCategoryFieldHandler}
        />
      </Styled.HeaderWrapper>
      {isContentLoading ? (
        <LoaderComponent theme="preview" />
      ) : countPerTimeFilter ? (
        <Styled.ItemWrapper>
          {lastReceipts?.map((receipt, index) => (
            <ReceiptsItemsList
              key={receipt.id}
              date={receipt.receipt_date}
              status={receipt.status as Statuses}
              customId={receipt.custom_id}
              total={receipt.total}
              currency={receipt.currency?.value}
              dateFormat={dateFormat}
              receiptId={receipt.id}
              receiptIndex={index}
            />
          ))}
        </Styled.ItemWrapper>
      ) : (
        <Styled.EmptyDataWrapper>
          <Styled.Image src={emptyDataSrc} />
          <Styled.Title>No receipts for this time</Styled.Title>
        </Styled.EmptyDataWrapper>
      )}
    </Styled.Container>
  );
};
