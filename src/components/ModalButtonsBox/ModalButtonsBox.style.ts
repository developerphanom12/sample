import { styled } from 'styles/theme';

export const ModalButtonsBoxStyles = {
  ButtonsBox: styled.div<{ isNoPadding?: boolean }>`
    display: flex;
    width: 100%;
    justify-content: center;
    padding: ${({ isNoPadding }) => (isNoPadding ? '0' : '0px 33px 0 33px')};
  `,
  ButtonsWrapper: styled.div<{ isCancelButton?: boolean }>`
    display: flex;
    justify-content: ${({ isCancelButton }) =>
      isCancelButton ? 'flex-end' : 'space-between'};
    max-width: 175px;
    width: 100%;
  `,
};
