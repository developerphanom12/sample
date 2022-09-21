import { styled } from 'styles/theme';

export const TableInboxAdminItemStyles = {
  Item: styled.div`
    display: grid;
    grid-template-columns:
      minmax(33px, 43px) minmax(65px, 75px) minmax(95px, 105px) minmax(
        130px,
        155px
      )
      minmax(150px, 162px) minmax(110px, 125px) minmax(94px, 106px) minmax(
        73px,
        85px
      )
      minmax(73px, 85px)
      minmax(73px, 85px)
      minmax(83px, 95px) minmax(80px, 92px)
      minmax(73px, 85px) minmax(118px, 130px);
    background-color: ${(props) => props.theme.colors.white};
    border-bottom: solid 1px ${(props) => props.theme.colors.borderWhite};
    min-height: 30px;
    max-height: fit-content;
    width: 100%;
    padding-left: 19px;
    padding-right: 9px;
  `,
  Link: styled.a<{ isVisited: boolean }>`
    color: ${(props) => (props.isVisited ? 'violet' : props.theme.colors.blue)};
    margin-right: 3px;
  `,
  Checkbox: styled.div<{ isBorder?: boolean }>`
    display: flex;
    align-items: center;
    padding-left: ${({ theme, isBorder }) => (isBorder ? '5px' : 0)};
    margin-right: 3px;
    border-right: ${({ theme, isBorder }) =>
      isBorder ? `solid 1px ${theme.colors.borderWhite}` : ''};
  `,
  View: styled.div`
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.colors.black};
    font-size: ${(props) => props.theme.size.default};
    cursor: pointer;
    margin-right: 3px;
    padding-left: 9px;
  `,
  Selector: styled.div`
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.colors.lightBlack};
    font-size: ${(props) => props.theme.size.default};
    border-right: solid 1px ${(props) => props.theme.colors.borderWhite};
    padding-left: 9px;
    margin-right: 3px;
  `,
  Status: styled.div`
    display: flex;
    align-items: center;
  `,
  ValueWrapper: styled.span`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
  `,
};
