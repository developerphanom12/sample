import { styled } from 'app/theme';

export const TableMasterItemStyles = {
  Item: styled.div`
    display: flex;
    background-color: ${(props) => props.theme.colors.white};
    border-left: solid 1px ${(props) => props.theme.colors.gray};
    border-right: solid 1px ${(props) => props.theme.colors.gray};
    border-bottom: solid 1px ${(props) => props.theme.colors.gray};
    min-height: 50px;
    max-height: fit-content;
    width: 100%;
    padding-left: 22px;
  `,
  Action: styled.div`
    display: flex;
    align-items: center;
    width: 160px;
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
    color: ${(props) => props.theme.colors.black};
    display: flex;
    align-items: center;
    width: 180px;
  `,
  NameWrapper: styled.span`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
  `,
};
