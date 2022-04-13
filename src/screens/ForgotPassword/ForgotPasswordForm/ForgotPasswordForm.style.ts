import { styled } from 'app/theme';

export const ForgotPasswordFormStyles = {
  Form: styled.form`
    max-width: 500px;
    width: 100%;
  `,
  Description: styled.p`
    position: absolute;
    bottom: -18px;
    left: 0;
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.size.biggerSmall};
  `,
  InputWrapper: styled.div`
    position: relative;
  `,
  ButtonWrapper: styled.div`
    padding-top: 21px;
  `,
};
