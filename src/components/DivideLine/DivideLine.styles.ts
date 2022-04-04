import { styled } from 'app/theme';

export const DivideLineStyles = {
  Line: styled.div`
    width: 100%;
    height: 1px;
    background: ${({ theme }) => theme.colors.whiteGray};
    margin: 25px 0;
  `,
};
