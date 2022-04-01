import { styled } from 'app/theme';

export const Styled = {
  ErrorText: styled.div`
    position: absolute;
    bottom: -18px;
    left: 0;
    font-weight: ${(props) => props.theme.fontWeight.medium};
    width: 100%;
    font-size: ${(props) => props.theme.size.biggerSmall};
    color: ${(props) => props.theme.colors.red};
    text-align: left;
  `,
};
