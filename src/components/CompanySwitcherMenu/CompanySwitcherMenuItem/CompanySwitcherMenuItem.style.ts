import { styled } from 'app/theme';

export const CompanySwitcherMenuItemStyles = {
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
    &:last-child {
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  `,
  CompanyNameWrapper: styled.div`
    display: flex;
  `,
  Content: styled.div`
    display: flex;
    align-items: center;
  `,
  Logo: styled.div``,
};
