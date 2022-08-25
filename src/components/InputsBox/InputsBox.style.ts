import { styled } from 'app/theme';

export const InputsBoxStyles = {
  Label: styled.p`
    font-family: ${(props) => props.theme.font.openSans};
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
    font-size: ${(props) => props.theme.size.default};
    color: ${(props) => props.theme.colors.black};
    margin-bottom: 10px;
  `,
};
