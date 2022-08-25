import { styled } from 'app/theme';

export const CompanyItemStyles = {
  Item: styled.div`
    font-size: ${({ theme }) => theme.size.default};
    width: 100%;
    height: 50px;
    background-color: ${({ theme }) => theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 21px;
    padding-right: 20px;
    &:hover {
      border-color: ${({ theme }) => theme.colors.lightGray};
      background-color: ${({ theme }) => theme.colors.pink};
    }
  `,
  CompanyNameWrapper: styled.div`
    display: flex;
  `,
  Content: styled.div`
    display: flex;
    align-items: center;
  `,
};
