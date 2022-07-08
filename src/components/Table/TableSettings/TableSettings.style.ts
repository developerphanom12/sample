import { styled } from 'app/theme';

export const TableSettingsStyles = {
  Head: styled.div`
    display: grid;
    grid-template-columns:
      minmax(40px, 150px) minmax(110px, 200px)
      minmax(110px, 170px) minmax(110px, 170px);
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
    width: 100%;
    font-size: ${(props) => props.theme.size.default};
  `,
  Column: styled.div`
    display: flex;
    align-items: center;
    width: 100%;
  `,
  EmptyContentWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colors.white};
    border: 1px solid ${(props) => props.theme.colors.gray};
    border-top: 0;
    min-height: 50px;
    width: 100%;
  `,
};
