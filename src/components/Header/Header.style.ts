import { Link } from 'react-router-dom';

import { styled } from 'app/theme';

export const HeaderStyles = {
  Header: styled.header``,
  Container: styled.div`
    display: flex;
    justify-content: space-between;
    background-color: ${(props) => props.theme.colors.orange};
    width: 100%;
    max-height: 75px;
    min-height: 60px;
    height: 100%;
  `,
  LogoIconWrapper: styled.div`
    display: flex;
    align-items: center;
    height: 48px;
    width: 48px;
    margin-top: 8px;
    margin-right: 5px;
    overflow: hidden;
  `,
  LogoWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 18px;
    height: 100%;
  `,
  Title: styled.h1`
    color: ${(props) => props.theme.colors.white};
    font-size: ${(props) => props.theme.size.xnormal};
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
  `,
  BlocksWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    width: 75%;
    @media (max-width: 1278px) {
      width: 80%;
    }
    @media (max-width: 1200px) {
      width: 85%;
    }
    @media (max-width: 810px) {
      width: 100%;
    }
  `,
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
  Notifications: styled.div`
    display: flex;
    align-items: center;
  `,
  Link: styled(Link)``,
};
