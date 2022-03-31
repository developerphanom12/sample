import { styled } from 'app/theme';

export const LoginStyles = {
  MainWrapper: styled.div`
    display: flex;
    width: 100%;
  `,
  Section: styled.section``,

  LeftSideContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.lightGray};
    padding: 78px 124px 200px 133px;
    width: 100%;
  `,
  Title: styled.h1`
    font-weight: 400;
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.size.title};
    margin-bottom: 55px;
  `,
  BoldText: styled.span`
    font-weight: 500;
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.size.title};
  `,
  SubTitle: styled.h2`
    font-weight: 600;
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.size.big};
    width: 409px;
    margin-bottom: 94px;
  `,
  ImageWrapper: styled.div`
    max-width: 473px;
    max-height: 476px;
  `,

  RightSideContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
    padding: 174px 0 0 69px;
    width: 100%;
  `,
  TabsWrapper: styled.div`
    display: flex;
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
    font-weight: ${({ isActive }) => (isActive ? '600' : '400')};
    color: ${({ isActive, theme }) =>
      isActive ? theme.colors.orange : theme.colors.black};
    font-size: ${({ theme }) => theme.size.title};
    cursor: ${({ isActive }) => !isActive && 'pointer'};
    padding-bottom: 7px;
  `,
};
