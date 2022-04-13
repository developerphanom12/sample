import { styled } from 'app/theme';

export const TableSettingsStyles = {
  Head: styled.div`
    display: flex;
    background-color: ${(props) => props.theme.colors.lightGray};
    border-top-left-radius: ${(props) => props.theme.size.borderRadius};
    border-top-right-radius: ${(props) => props.theme.size.borderRadius};
    border: solid 1px ${(props) => props.theme.colors.gray};
    height: 50px;
    width: 100%;
    padding-left: 22px;
  `,
  Actions: styled.div`
    display: flex;
    align-items: center;
    width: 160px;
    font-size: ${(props) => props.theme.size.default};
  `,
  Column: styled.div`
    display: flex;
    align-items: center;
    width: 180px;
  `,
};
