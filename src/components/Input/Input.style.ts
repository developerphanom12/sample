import { styled } from "app/theme";

export const InputStyles = {
  Label: styled.p`
    font-family: ${(props) => props.theme.font.openSans};
    font-weight: 600;
    font-size: ${(props) => props.theme.size.default};
    color: ${(props) => props.theme.colors.black};
    margin-bottom: ${(props) => props.theme.size.small};
  `,

  Input: styled.input`
    font-family: ${(props) => props.theme.font.openSans};
    font-size: ${(props) => props.theme.size.default};
    background-color: ${(props) => props.theme.colors.white};
    height: 45px;
    width: 100%;
    border-radius: 5px;
    border: 1px solid rgba(34, 43, 56, 0.1);
    box-shadow: 0px 1px 1px rgba(34, 43, 56, 0.25);
  `,
};
