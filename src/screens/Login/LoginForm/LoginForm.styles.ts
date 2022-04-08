import { Link } from 'react-router-dom';

import { styled } from 'app/theme';

export const Styled = {
  Form: styled.form`
    max-width: 500px;
    width: 100%;
  `,

  ForgotPassword: styled.div`
    display: flex;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.orange};
    font-size: ${({ theme }) => theme.size.default};
    cursor: pointer;
    margin: 21px 0 23px 0;
    text-decoration: underline;
  `,
  SignUpLink: styled.div`
    display: flex;
    justify-content: center;
    margin-top: 15px;
  `,
  Text: styled.p`
    font-weight: ${(props) => props.theme.fontWeight.normal};
    font-size: ${(props) => props.theme.size.default};
    color: ${(props) => props.theme.colors.black};
  `,
  SignUpText: styled(Link)`
    font-weight: ${(props) => props.theme.fontWeight.normal};
    font-size: ${(props) => props.theme.size.default};
    color: ${(props) => props.theme.colors.orange};
    text-decoration: underline;
    margin-left: 4px;
    cursor: pointer;
  `,
};
