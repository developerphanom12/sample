import { styled } from 'app/theme';

export const SuccessPopupStyles = {
  Wrapper: styled.div`
    padding: 12px 19px;
    background: ${({ theme }) => theme.colors.swampGreen};
    border-radius: 5px 0px 0px 5px;
  `,
  Title: styled.p`
    color: ${({ theme }) => theme.colors.lightGray};
    text-align: center;
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    font-size: ${({ theme }) => theme.size.default};
  `,
};
