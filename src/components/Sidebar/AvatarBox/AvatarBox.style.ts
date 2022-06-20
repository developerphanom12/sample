import { styled } from 'app/theme';

export const AvatarBoxStyles = {
  MainWrapper: styled.div`
    padding: 30px 10px 0;
    justify-content: center;
    display: flex;
    flex-direction: column;
  `,
  ContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  UserInfoWrapper: styled.div`
    margin-left: 40px;
  `,
  Label: styled.p`
    display: flex;
    justify-content: center;
    max-height: 50px;
    min-height: 40px;
    font-size: ${({ theme }) => theme.size.xnormal};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    color: ${({ theme }) => theme.colors.black};
  `,
  ImageWrapper: styled.div`
    width: 150px;
    height: 150px;
    border: 1px solid rgba(34, 43, 56, 0.25);
    box-sizing: border-box;
    box-shadow: 4px 4px 4px rgb(0 0 0 / 25%);
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
  `,
  NameBox: styled.div`
    display: flex;
    flex-direction: column;
  `,
  NameAndStatus: styled.p<{ isStatus?: boolean }>`
    display: flex;
    font-size: ${({ theme }) => theme.size.xnormal};
    font-weight: ${({ theme, isStatus }) =>
      isStatus ? theme.fontWeight.normal : theme.fontWeight.semiBold};
    color: ${({ theme }) => theme.colors.black};
    margin-top: ${({ isStatus }) => isStatus && '5px'}; ;
  `,
};
