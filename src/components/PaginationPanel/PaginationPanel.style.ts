import { styled } from 'styles/theme';

export const PaginationPanelStyles = {
  Wrapper: styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    padding: 0 15px;
    bottom: 0;
    left: 0;
    background-color: #fff;
    box-shadow:  0 -3px 10px #d2d2d2;
  `,
  PagesWrapper: styled.div`
    width: max-conent;
  `,
  SelectorWrapper: styled.div`
    display: flex;
    align-items: center;
    width: 130px;
  `,
};
