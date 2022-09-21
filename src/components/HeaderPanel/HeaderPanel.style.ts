import { styled } from 'styles/theme';

export const HeaderPanelStyles = {
  HeaderPanelWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  `,
  ButtonsWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 167px;
    width: 100%;
  `,
  ButtonActionsWrapper: styled.div`
    position: relative;
  `,
  SearchWrapper: styled.div`
    display: flex;
    width: 100%;
    height: 40px;
  `,
  FilterWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 355px;
  `,
  SelectWrapper: styled.div`
    display: flex;
    justify-content: flex-start;
    width: auto;
    margin-left: 10px;
  `,
  DatePickerWrapper: styled.div`
    max-width: 140px;
  `,
  SearchInputWrapper: styled.div`
    display: flex;
    position: relative;
    max-width: 220px;
    width: 100%;
  `,
  IconWrapper: styled.div`
    display: flex;
    position: absolute;
    top: 50%;
    left: 9px;
    transform: translateY(-50%);
  `,
};
