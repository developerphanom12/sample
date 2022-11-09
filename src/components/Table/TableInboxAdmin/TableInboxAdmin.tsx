import { FC } from 'react';

import { CheckboxItem } from 'components/Checkbox/Checkbox';

import { TableButton } from '../TableButton/TableButton';
import { TableInboxAdminItem } from './TableInboxAdminItem/TableInboxAdminItem';
import { TableInboxAdminStyles as Styled } from './TableInboxAdmin.style';

export const TableInboxAdmin: FC<TableInboxAdminProps> = (props) => {
  const {
    onCheckedItemHandler,
    onCheckedPublishMockFuncHandler,
    onCheckedAllItemsHandler,
    onCheckedPaidHandler,
    isVisited,
    receiptList,
    isAllChecked,
    dateFormat,
    isReceipts,
  } = props;

  return (
    <>
      <Styled.Head>
        <Styled.Checkbox>
          <CheckboxItem
            isChecked={isAllChecked}
            onChange={onCheckedAllItemsHandler}
            name="allChecked"
          />
        </Styled.Checkbox>
        <Styled.Text>ID</Styled.Text>
        <Styled.Selector>
          <TableButton>Date</TableButton>
        </Styled.Selector>
        <Styled.Selector>
          <TableButton>Supplier</TableButton>
        </Styled.Selector>
        <Styled.Selector>
          <TableButton>Supplier Account</TableButton>
        </Styled.Selector>
        <Styled.Selector>
          <TableButton>Category</TableButton>
        </Styled.Selector>
        <Styled.Selector>
          <TableButton>VAT Code</TableButton>
        </Styled.Selector>
        <Styled.Selector>
          <TableButton>CUR</TableButton>
        </Styled.Selector>
        <Styled.Selector>
          <TableButton>Net</TableButton>
        </Styled.Selector>
        <Styled.Selector>
          <TableButton>Tax</TableButton>
        </Styled.Selector>
        <Styled.Selector>
          <TableButton>Total</TableButton>
        </Styled.Selector>
        <Styled.Selector>
          <TableButton>Publish</TableButton>
        </Styled.Selector>
        <Styled.Selector>
          <TableButton>Paid</TableButton>
        </Styled.Selector>
        <Styled.Text>Status</Styled.Text>
      </Styled.Head>
      {isReceipts ? (
        receiptList?.map((receipt, index) => (
          <TableInboxAdminItem
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
            isVisited={isVisited}
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
};
