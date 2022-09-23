import { styled } from 'styles/theme';

export const ThreeDotsMenuStyles = {
  Wrapper: styled.div`
    position: absolute;
    top: 75%;
    right: 18px;
    width: 130px;
    box-shadow: 0px 1px 1px ${(props) => props.theme.colors.boxShadowBlack};
    z-index: ${({ theme }) => theme.zIndex.xs};
    background-color: ${({ theme }) => theme.colors.white};
  `,
  Item: styled.button`
    font-size: ${({ theme }) => theme.size.default};
    color: ${({ theme }) => theme.colors.lightBlack};
    width: 100%;
    height: 38px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderWhite};
    background-color: ${({ theme }) => theme.colors.white};
    text-align: start;
    &:hover {
      background-color: ${({ theme }) => theme.colors.pink};
      color: ${({ theme }) => theme.colors.lightBlack};
    }
    &:last-child {
      border-bottom: none;
    }
  `,
};
