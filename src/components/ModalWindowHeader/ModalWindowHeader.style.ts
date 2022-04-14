import { styled } from 'app/theme';

export const ModalWindowHeaderStyles = {
  HeaderBox: styled.div`
    padding: 21px 33px 16px 33px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-height: 62px;
    height: 100%;
    width: 100%;
    border-bottom: ${({ theme }) => `1px solid ${theme.colors.gray}`};
  `,
  Title: styled.p`
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    font-size: ${({ theme }) => theme.size.mediumLarge};
    color: ${({ theme }) => theme.colors.black};
  `,
};
