import { styled } from "app/theme";

export const HeaderStyles = {
  Container: styled.div`
    display: flex;
    justify-content: space-between;
    background-color: ${(props) => props.theme.colors.orange};
    width: 100%;
    height: 75px;
    padding-left: 293px;
  `,
  LinkWrapper: styled.div`
    width: 100px;
    &:not(:last-child) {
      margin-right: 30px;
    }
  `,
  Links: styled.div`
    display: flex;
  `,
  Notifications: styled.div`
    display: flex;
  `,
};
