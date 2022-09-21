import { styled } from 'styles/theme';

export const ModalWindowHeaderStyles = {
  HeaderBox: styled.div`
    padding: 28px 33px 25px 33px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  `,
  Title: styled.p`
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    font-size: ${({ theme }) => theme.size.title};
    color: ${({ theme }) => theme.colors.lightBlack};
  `,
};
