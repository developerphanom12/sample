import { styled } from 'app/theme';

export const ModalButtonsBoxStyles = {
  ButtonsBox: styled.div<{ isNoPadding?: boolean }>`
    display: flex;
    width: 100%;
    justify-content: end;
    padding: ${({ isNoPadding }) => (isNoPadding ? '0' : '0px 33px 30px 33px')};
  `,
  ButtonsWrapper: styled.div<{ isCancelButton?: boolean }>`
    display: flex;
    justify-content: ${({ isCancelButton }) =>
      isCancelButton ? 'flex-end' : 'space-between'};
    max-width: 231px;
    width: 100%;
  `,
};
