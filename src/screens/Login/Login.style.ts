import { styled } from 'app/theme';

export const Styled = {
  MainWrapper: styled.div`
    display: flex;
    width: 100%;
  `,
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
    font-weight: 400;
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

  RightSideContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
    padding: 174px 151px 0 69px;
    width: 100%;
  `,
  TabsWrapper: styled.div`
    display: flex;
    margin-bottom: 38px;
  `,
  ActiveTabWrapper: styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 45px;
  `,
  ActiveLine: styled.div`
    height: 2px;
    background: ${({ theme }) => theme.colors.orange};
    border-radius: 10px;
  `,
  Tab: styled.div<{ isActive?: boolean }>`
    display: flex;
    font-weight: ${({ isActive, theme }) =>
      isActive ? theme.fontWeight.semiBold : theme.fontWeight.normal};
    color: ${({ isActive, theme }) =>
      isActive ? theme.colors.orange : theme.colors.black};
    font-size: ${({ theme }) => theme.size.title};
    cursor: ${({ isActive }) => !isActive && 'pointer'};
    padding-bottom: 7px;
  `,
};
