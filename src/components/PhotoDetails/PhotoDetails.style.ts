import { styled } from 'app/theme';

export const PhotoDetailsStyles = {
  ContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.white};
    padding: 20px 76px 15px 37px;
    width: 100%;
    overflow: hidden;
  `,
};
