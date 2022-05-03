import { Link } from 'react-router-dom';

import { styled } from 'app/theme';

export const SignUpFormStyles = {
  Form: styled.form`
    max-width: 500px;
    max-height: 546px;
    height: 100%;
    width: 100%;
    @media (max-width: 768px) {
      max-height: max-content;
      height: auto;
    }
  `,
  ForgotPassword: styled(Link)`
    display: flex;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.orange};
    font-size: ${({ theme }) => theme.size.default};
    cursor: pointer;
    text-decoration: underline;
    margin: 20px 0;
  `,
  Label: styled.p`
    font-family: ${(props) => props.theme.font.openSans};
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
    font-size: ${(props) => props.theme.size.default};
    color: ${(props) => props.theme.colors.black};
    margin-bottom: 10px;
  `,
};
