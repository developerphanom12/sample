import { styled } from 'styles/theme';

export const TableInboxStyles = {
  Head: styled.div`
    display: flex;
    background-color: ${(props) => props.theme.colors.lightGray};
    border-top-left-radius: ${(props) => props.theme.size.borderRadius};
    border-top-right-radius: ${(props) => props.theme.size.borderRadius};
    border: solid 1px ${(props) => props.theme.colors.gray};
    height: 50px;
    width: 100%;
    padding-left: 27px;
  `,
  StaticBlock: styled.div`
    display: flex;

    width: 84px;
    font-size: ${(props) => props.theme.size.default};
    margin-right: 35px;
  `,
  Checkbox: styled.div`
    display: flex;
    align-items: center;
    margin-right: 35px;
  `,
  View: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.colors.black};
    font-size: ${(props) => props.theme.size.default};
  `,

  ColumnID: styled.div`
    display: flex;
    align-items: center;
    width: 134px;
    padding-right: 25px;
  `,
  ColumnCustomer: styled.div`
    display: flex;
    align-items: center;
    width: 213px;
    padding-right: 25px;
  `,
  ColumnDateOnReceipt: styled.div`
    display: flex;
    align-items: center;
    width: 197px;
    padding-right: 25px;
  `,
  ColumnStatus: styled.div`
    display: flex;
    align-items: center;
    width: 164px;
    padding-right: 25px;
  `,
  ColumnDepartures: styled.div`
    display: flex;
    align-items: center;
    width: 189px;
    padding-right: 25px;
  `,
};
