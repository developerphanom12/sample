import { SalesInvoicesTable } from 'components/Table/SalesInvoices';
import { ChangeEvent, MouseEvent } from 'react';

import { ActionsPanel } from './ActionsPanel';
import { SalesInvoicesStyles as Styled } from './SalesInvoices.styles';

export const SalesInvoices = () => {
  return (
    <Styled.Wrapper>
      <ActionsPanel />
      <SalesInvoicesTable
        onCheckedPublishMockFuncHandler={() => {}}
        receiptList={[]}
        isAllChecked={false}
        onCheckedPaidHandler={function (
          event: ChangeEvent<HTMLInputElement>
        ): Promise<void> {
          throw new Error('Function not implemented.');
        }}
        dateFormat={''}
        sortField={''}
        sortOrder={''}
        requestSort={function (event: MouseEvent<HTMLDivElement>): void {}}
      />
    </Styled.Wrapper>
  );
};
