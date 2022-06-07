import { styled } from 'app/theme';

export const ReceiptPreviewItemStyles = {
  ItemWrapper: styled.div<{ isActive?: boolean }>`
    padding: 10px;
    width: 129px;
    height: 158px;
    border-radius: 5px;
    background: ${({ theme, isActive }) =>
      isActive ? theme.colors.pink : theme.colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  Image: styled.img`
    width: 92px;
    height: 130px;
  `,
  ImageWrapper: styled.div`
    display: flex;
    position: relative;
  `,
  IconWrapper: styled.div`
    cursor: pointer;
    width: 18px;
    height: 18px;
    display: flex;
    position: absolute;
    top: -6px;
    right: -6px;
  `,
};
