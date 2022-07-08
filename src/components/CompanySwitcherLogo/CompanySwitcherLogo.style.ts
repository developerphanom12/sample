import { styled } from 'app/theme';

export const CompanySwitcherLogoStyles = {
  Wrapper: styled.div`
    min-width: 40px;
    height: 40px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.orange};
    display: flex;
    justify-content: center;
    margin-right: 20px;
  `,
  Text: styled.p`
    display: flex;
    align-items: center;
    font-size: ${({ theme }) => theme.size.default};
    color: ${({ theme }) => theme.colors.white};
  `,
  LogoImage: styled.img`
    width: 40px;
    height: 40px;
    margin-right: 20px;
    border-radius: 50%;
  `,
};
