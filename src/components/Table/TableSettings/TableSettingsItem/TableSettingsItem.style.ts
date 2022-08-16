import { styled } from 'app/theme';

export const TableSettingsItemStyles = {
  Item: styled.div<{ isCompanyTable?: boolean }>`
    display: grid;
    grid-template-columns: ${({ isCompanyTable }) =>
      isCompanyTable
        ? `minmax(43px, 150px) minmax(111px, 200px) minmax(111px, 170px) minmax(
        111px,
        170px
      )`
        : `minmax(43px, 150px) minmax(111px, 200px) minmax(111px, 230px) minmax(
        110px,
        150px
      )
      minmax(110px, 150px)
      minmax(110px, 170px) minmax(110px, 170px)`};
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
    width: 100%;
  `,
  TextWrapper: styled.span`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
  `,
};
