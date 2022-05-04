import { styled } from 'app/theme';

export const TableInboxAdminItemStyles = {
  Item: styled.div`
    display: grid;
    grid-template-columns:
      minmax(25px, 94px) minmax(40px, 96px) minmax(67px, 141px) minmax(
        81px,
        148px
      )
      minmax(140px, 229px) minmax(80px, 229px) minmax(80px, 147px) minmax(
        50px,
        102px
      )
      minmax(47px, 98px) minmax(48px, 104px) minmax(55px, 110px) minmax(
        70px,
        120px
      )
      minmax(50px, 90px) minmax(99px, 140px);
    background-color: ${(props) => props.theme.colors.white};
    border-left: solid 1px ${(props) => props.theme.colors.gray};
    border-right: solid 1px ${(props) => props.theme.colors.gray};
    border-bottom: solid 1px ${(props) => props.theme.colors.gray};
    min-height: 50px;
    max-height: fit-content;
    width: 100%;
    padding-left: 19px;
    padding-right: 9px;
  `,
  Link: styled.a<{ isVisited: boolean }>`
    color: ${(props) => (props.isVisited ? 'violet' : props.theme.colors.blue)};
    text-decoration: underline;
    margin-right: 3px;
  `,
  Link: styled.a<{ isVisited: boolean }>`
    color: ${(props) => (props.isVisited ? 'violet' : props.theme.colors.blue)};
    text-decoration: underline;
  `,
  Checkbox: styled.div`
    display: flex;
    align-items: center;
    padding-left: 15%;
    margin-right: 3px;
  `,
  View: styled.div`
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.colors.black};
    font-size: ${(props) => props.theme.size.default};
    cursor: pointer;
    margin-right: 3px;
  `,
  Selector: styled.div`
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.colors.black};
    font-size: ${(props) => props.theme.size.default};
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
