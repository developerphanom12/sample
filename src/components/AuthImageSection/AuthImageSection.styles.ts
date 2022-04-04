import { styled } from 'app/theme';

export const AuthImageSectionStyles = {
  Section: styled.section`
    display: flex;
    width: 100%;
  `,

  LeftSideContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.lightGray};
    padding: 78px 124px 200px 133px;
    width: 100%;
  `,
  Title: styled.h1`
    display: flex;
    width: 100%;
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.size.title};
    margin-bottom: 55px;
  `,
  BoldText: styled.span`
    font-weight: ${(props) => props.theme.fontWeight.medium};
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.size.title};
  `,
  SubTitle: styled.h2`
    display: flex;
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.size.big};
    max-width: 409px;
    width: 100%;
    margin-bottom: 94px;
  `,
  ImageWrapper: styled.div`
    max-width: 473px;
    max-height: 476px;
    width: 100%;
  `,
};
