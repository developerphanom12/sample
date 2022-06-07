import { styled } from 'app/theme';

export const ThreeDotsMenuStyles = {
  Wrapper: styled.div`
    position: absolute;
    top: 75%;
    right: 18px;
    width: 130px;
    box-shadow: 0px 1px 1px ${(props) => props.theme.colors.boxShadowBlack};
    z-index: ${({ theme }) => theme.zIndex.xs};
  `,
  Item: styled.button`
    font-size: ${({ theme }) => theme.size.default};
    width: 100%;
    height: 38px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
    background-color: ${({ theme }) => theme.colors.white};
    text-align: start;
    &:hover {
      background-color: ${({ theme }) => theme.colors.orange};
      color: ${({ theme }) => theme.colors.white};
    }
    &:last-child {
      border-bottom: none;
    }
  `,
};
