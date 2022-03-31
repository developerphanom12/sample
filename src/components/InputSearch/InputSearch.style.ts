import { styled } from "../../app/theme";

export const InputSearchStyles = {
  Input: styled.input`
    font-family: ${(props) => props.theme.font.openSans};
    font-size: ${(props) => props.theme.size.default};
    background-color: ${(props) => props.theme.colors.lightGray};
    height: 45px;
    width: 300px;
    border-radius: 5px;
    border: 1px solid ${(props) => props.theme.colors.gray};
    box-shadow: 0px 1px 1px rgba(34, 43, 56, 0.25);
  `,
  WrapperIcon: styled.div`
    background-color: transparent;
    position: absolute;
    top: 30%;
    left: 90%;
  `,
  WrapperInput: styled.div`
    width: 300px;
    position: relative;
  `,
};
