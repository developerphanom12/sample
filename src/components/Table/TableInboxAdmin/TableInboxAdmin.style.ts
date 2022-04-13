import { styled } from 'app/theme';

export const TableInboxAdminStyles = {
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
    width: 215px;
  `,
  Checkbox: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 35px;
  `,
  View: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.colors.black};
    font-size: ${(props) => props.theme.size.default};
    margin-right: 37px;
  `,
  Publish: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.colors.black};
    font-size: ${(props) => props.theme.size.default};
    margin-right: 38px;
  `,
  Date: styled.div`
    width: 140px;
    padding-right: 16px;
  `,

  Supplier: styled.div`
    width: 128px;
    padding-right: 16px;
  `,

  Selector: styled.div`
    width: 158px;
    padding-right: 16px;
  `,

  NumericCredentials: styled.div`
    width: 82px;
  `,
};
