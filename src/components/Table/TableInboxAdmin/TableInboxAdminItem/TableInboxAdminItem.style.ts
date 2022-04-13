import { styled } from 'app/theme';

export const TableInboxAdminItemStyles = {
  Item: styled.div`
    display: flex;

    background-color: ${(props) => props.theme.colors.white};
    border-left: solid 1px ${(props) => props.theme.colors.gray};
    border-right: solid 1px ${(props) => props.theme.colors.gray};
    border-bottom: solid 1px ${(props) => props.theme.colors.gray};
    height: 50px;
    width: 100%;
    padding-left: 27px;
  `,
  StaticBlock: styled.div`
    display: flex;

    width: 215px;
  `,
  Checkbox: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 37px;
  `,
  View: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.colors.black};
    font-size: ${(props) => props.theme.size.default};
    margin-right: 60px;
    cursor: pointer;
  `,
  Publish: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.colors.black};
    font-size: ${(props) => props.theme.size.default};
    margin-right: 57px;
    cursor: pointer;
  `,

  Date: styled.div`
    display: flex;
    align-items: center;
    width: 140px;
    padding-right: 16px;
    color: ${(props) => props.theme.colors.black};
    font-size: ${(props) => props.theme.size.default};
  `,

  Supplier: styled.div`
    display: flex;
    align-items: center;
    width: 128px;
    padding-right: 16px;
    color: ${(props) => props.theme.colors.black};
    font-size: ${(props) => props.theme.size.default};
  `,

  Selector: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 158px;
    padding-right: 16px;
  `,
  SelectorMock: styled.div`
    width: 100%;
    height: 35px;
    border: solid 1px black;
  `,

  NumericCredentials: styled.div`
    display: flex;
    align-items: center;
    width: 82px;
    color: ${(props) => props.theme.colors.black};
    font-size: ${(props) => props.theme.size.default};
  `,
  PaidCheck: styled.div`
    display: flex;
    align-items: center;
    width: 82px;
    padding-left: 5px;
  `,
};
