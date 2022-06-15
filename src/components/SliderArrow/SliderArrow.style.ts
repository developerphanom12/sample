import { styled } from 'app/theme';

export const SliderArrowStyles = {
  Wrapper: styled.button<{ isDisabled?: boolean; isForwardButton?: boolean }>`
    display: flex;
    background-color: ${({ theme, isDisabled }) =>
      isDisabled ? theme.colors.lighterGrey : theme.colors.lightRed};
    width: 50px;
    height: 50px;
    border-radius: 5px;
    justify-content: center;
    align-self: center;
    align-items: center;
    z-index: 1;
  `,
  IconWrapper: styled.div<{ isForwardButton?: boolean }>`
    display: flex;
    width: 14px;
    height: 8px;
    transform: ${({ isForwardButton }) =>
      isForwardButton ? 'rotate(-90deg)' : 'rotate(90deg)'};
  `,
};
