import { FC, memo } from 'react';

import { setIsSorted } from 'services/utils';
import { ISalesInvoice } from '../../../screens/SalesInvoices/types/salesInvoices.types';

import { CheckboxItem } from '../../Checkbox';
import { TableButton } from '../TableButton/TableButton';
import { TableStyles as Styled } from '../TableGlobalStyles';

import {
  TABLE_COLUMN_NAMES,
  TABLE_GRID_MARKUP,
} from './ExpenseReport.constants';
import { SalesInvoicesItem } from './ExpenseReportItem';

interface ISalesInvoicesTableProps
  extends Omit<TableInboxAdminProps, 'receiptList'> {
  invoicesList: ISalesInvoice[];
}
export const ExpenseReportTable: FC<ISalesInvoicesTableProps> = memo(
  (props) => {
    const {
      onCheckedItemHandler,
      onCheckedPublishMockFuncHandler,
      onCheckedAllItemsHandler,
      onCheckedPaidHandler,
      invoicesList,
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
        {invoicesList.length ? (
          invoicesList.map((invoice, index) => (
            <SalesInvoicesItem
              publishStatus={invoice.publish_status}
              paymentStatus={invoice.payment_status}
              key={invoice.id}
              receiptIndex={index}
              customId={invoice.custom_id}
              receiptId={invoice.id}
              currency={invoice.currency.value}
              category={''}
              date={invoice.invoice_date}
              net={invoice.net}
              total={invoice.total}
              vatCode={invoice.vat_code}
              tax={invoice.tax}
              status={invoice.status}
              supplier={invoice.supplier}
              isChecked={invoice.isChecked}
              onCheckedItemHandler={onCheckedItemHandler}
              onCheckedPaidHandler={onCheckedPaidHandler}
              onCheckedPublishMockFuncHandler={onCheckedPublishMockFuncHandler}
            />
          ))
        ) : (
          <Styled.EmptyContentWrapper>
            No records found
          </Styled.EmptyContentWrapper>
        )}
      </>
    );
  }
);
