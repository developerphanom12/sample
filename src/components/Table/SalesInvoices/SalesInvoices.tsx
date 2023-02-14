import { FC, memo } from 'react';

import { setIsSorted } from 'services/utils';

import { CheckboxItem } from '../../Checkbox';
import { TableButton } from '../TableButton/TableButton';
import { TableStyles as Styled } from '../TableGlobalStyles';

import {
  TABLE_COLUMN_NAMES,
  TABLE_GRID_MARKUP,
} from './salesInvoices.constants';
import { SalesInvoicesItem } from './SalesInvoicesItem';

export const SalesInvoicesTable: FC<TableInboxAdminProps> = memo((props) => {
  const {
    onCheckedItemHandler,
    onCheckedPublishMockFuncHandler,
    onCheckedAllItemsHandler,
    onCheckedPaidHandler,
    receiptList,
    isAllChecked,
    dateFormat,
    sortField,
    sortOrder,
    requestSort,
  } = props;

  return (
    <>
      <Styled.Head templateColumns={TABLE_GRID_MARKUP}>
        <Styled.Checkbox>
          <CheckboxItem
            isChecked={isAllChecked}
            onChange={onCheckedAllItemsHandler}
            name="allChecked"
          />
        </Styled.Checkbox>
        <Styled.Text>ID</Styled.Text>
        {TABLE_COLUMN_NAMES.map((item) => {
          const isSorted = setIsSorted(sortField, sortOrder, item.id);
          return (
            <Styled.Selector
              key={item.id}
              id={item.id}
              onClick={requestSort}
              isSorted={sortField === item.id}
            >
              <TableButton isSorted={isSorted}>{item.name}</TableButton>
            </Styled.Selector>
          );
        })}
        <Styled.Text>Status</Styled.Text>
      </Styled.Head>
      {receiptList.length ? (
        receiptList.map((receipt, index) => (
          <SalesInvoicesItem
            publishStatus={receipt.publish_status}
            paymentStatus={receipt.payment_status}
            key={receipt.id}
            receiptIndex={index}
            customId={receipt.custom_id}
            receiptId={receipt.id}
            currency={receipt.currency.value}
            category={receipt.category?.name}
            date={receipt.receipt_date}
            net={receipt.net}
            total={receipt.total}
            vatCode={receipt.vat_code}
            tax={receipt.tax}
            status={receipt.status}
            supplier={receipt.supplier}
            supplierAccount={receipt.supplier_account?.name}
            isChecked={receipt.isChecked}
            onCheckedItemHandler={onCheckedItemHandler}
            onCheckedPaidHandler={onCheckedPaidHandler}
            onCheckedPublishMockFuncHandler={onCheckedPublishMockFuncHandler}
            dateFormat={dateFormat}
          />
        ))
      ) : (
        <Styled.EmptyContentWrapper>
          No records found
        </Styled.EmptyContentWrapper>
      )}
    </>
  );
});
