import { Link } from 'react-router-dom';
import { styled } from 'app/theme';

export const NotFoundStyles = {
  MainWrapper: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
  `,
  ContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 750px;
    width: 100%;
    height: 100%;
  `,
  ImageWrapper: styled.div`
    width: 100%;
    height: 100%;
    max-height: 500px;
  `,
  Title: styled.p`
    display: flex;
    justify-content: center;
    width: 100%;
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.size.xnormal};
    margin-bottom: 15px;
  `,
  SubTitle: styled.p`
    justify-content: center;
    display: flex;
    width: 100%;
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.size.default};
    margin-bottom: 44px;
  `,
  ButtonWrapper: styled(Link)`
    display: flex;
    width: 100%;
    max-width: 250px;
  `,
};
