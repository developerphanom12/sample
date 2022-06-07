import { styled } from 'app/theme';

export const HeaderPanelStyles = {
  HeaderPanelWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    width: 100%;
  `,
  ButtonWrapper: styled.div`
    height: 45px;
  `,
  SearchWrapper: styled.div`
    width: 100%;
    height: 45px;
  `,
  SearchInputWrapper: styled.div`
    display: flex;
    position: relative;
    max-width: 300px;
    width: 100%;
  `,
  IconWrapper: styled.div`
    display: flex;
    position: absolute;
    top: 50%;
    right: 14px;
    transform: translateY(-50%);
  `,
};
