import { styled } from 'styles/theme';

export const TableInboxAdminStyles = {
  Head: styled.div`
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
    border-top: solid 1px ${(props) => props.theme.colors.borderWhite};
    border-bottom: solid 1px ${(props) => props.theme.colors.lightBlack};
    height: 49px;
    width: 100%;
    padding-left: 19px;
    padding-right: 9px;
  `,
  Checkbox: styled.div`
    display: flex;
    align-items: center;
    margin-right: 3px;
  `,
  Text: styled.div`
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.colors.lightBlack};
    font-size: ${(props) => props.theme.size.default};
    margin-right: 3px;
    padding-left: 9px;
  `,
  Selector: styled.div`
    margin-right: 3px;
    padding-left: 10px;
    border-right: solid 1px ${(props) => props.theme.colors.borderWhite};
  `,
  EmptyContentWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colors.white};
    border-left: solid 1px ${(props) => props.theme.colors.gray};
    border-right: solid 1px ${(props) => props.theme.colors.gray};
    border-bottom: solid 1px ${(props) => props.theme.colors.gray};
    min-height: 50px;
    width: 100%;
  `,
};
