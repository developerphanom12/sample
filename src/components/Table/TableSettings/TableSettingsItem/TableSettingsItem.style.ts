import { styled } from 'app/theme';

export const TableSettingsItemStyles = {
  Item: styled.div`
    display: flex;
    background-color: ${(props) => props.theme.colors.white};
    border-left: solid 1px ${(props) => props.theme.colors.gray};
    border-right: solid 1px ${(props) => props.theme.colors.gray};
    border-bottom: solid 1px ${(props) => props.theme.colors.gray};
    height: 50px;
    width: 100%;
    padding-left: 22px;
  `,
  Action: styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 160px;
  `,
  ActionButton: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:not(:last-child) {
      margin-right: 9px;
    }
  `,
  Column: styled.div`
    font-size: ${(props) => props.theme.size.default};
    display: flex;
    align-items: center;
    max-width: 180px;
    width: 100%;
  `,
};
