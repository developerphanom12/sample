import { styled } from 'app/theme';

export const ReceiptsSelectsStyles = {
  SelectorBox: styled.div`
    width: 50%;
  `,
  SelectorWrapper: styled.div`
    display: flex;
    justify-content: end;
    margin-bottom: 45px;
  `,
  SelectorTitle: styled.p`
    font-size: ${({ theme }) => theme.size.default};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    color: ${({ theme }) => theme.colors.black};
    margin-bottom: 10px;
  `,
};
