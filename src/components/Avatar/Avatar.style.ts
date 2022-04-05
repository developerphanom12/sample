import { styled } from "app/theme";

export const AvatarStyles = {
  Wrapper: styled.div`
    border-left: solid 1px ${(props) => props.theme.colors.white};
    width: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
};
