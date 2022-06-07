import { styled } from 'app/theme';

export const DocumentMetricStyles = {
  Container: styled.div`
    padding: 21px 38px 0px 32px;
  `,
  Head: styled.h1`
    font-size: ${({ theme }) => theme.size.subTitle};
    color: ${({ theme }) => theme.colors.black};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    margin-bottom: 10px;
  `,
};
