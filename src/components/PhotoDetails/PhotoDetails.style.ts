import { styled } from 'styles/theme';

export const PhotoDetailsStyles = {
  ContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.white};
    padding: 15px 15px 15px 15px;
    width: 95%;
    height:90%;
    overflow: hidden;
    border-radius: 10px;
    border: 1px solid #00000040;
  `,
};
