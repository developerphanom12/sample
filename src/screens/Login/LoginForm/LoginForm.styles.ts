import styled from 'styled-components';

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
};
