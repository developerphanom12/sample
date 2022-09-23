import { styled } from 'styles/theme';

export const LinksBoxStyles = {
  LinkWrapper: styled.nav`
    width: 100%;
    display: flex;
    &:not(:last-child) {
      margin-right: 30px;
    }
  `,
  Links: styled.div`
    display: flex;
  `,
};
