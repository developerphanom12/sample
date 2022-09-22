import { styled } from 'styles/theme';

export const TableSettingsItemStyles = {
  Item: styled.div<{ isCompanyTable?: boolean }>`
    display: grid;
    grid-template-columns: ${({ isCompanyTable }) =>
      isCompanyTable
        ? `minmax(55px, 65px) minmax(120px, 230px) minmax(111px, 170px) minmax(
        111px,
        200px
      )`
        : `minmax(50px, 55px) minmax(100px, 201px) minmax(175px, 240px) minmax(
          90px, 135px) minmax(110px, 150px) minmax(130px, 135px) minmax(100px, 150px) minmax(110px, 170px)`};
    border-bottom: solid 1px ${(props) => props.theme.colors.borderWhite};
    height: 50px;
    width: 100%;
    padding-left: 18px;
  `,
  Action: styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    border-right: solid 1px ${(props) => props.theme.colors.borderWhite};
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
    color: ${(props) => props.theme.colors.lightBlack};
    border-right: solid 1px ${(props) => props.theme.colors.borderWhite};
    padding-left: 13px;
    &:last-child {
      border-right: none;
    }
  `,
  TextWrapper: styled.span<{ isExpired?: boolean }>`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    ${({ isExpired, theme }) =>
      isExpired && `cursor: pointer; color: ${theme.colors.blue};`}
  `,
};
