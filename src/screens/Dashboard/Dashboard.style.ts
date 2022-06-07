import { styled } from 'app/theme';

export const DashboardStyles = {
  Wrapper: styled.div`
    width: 100%;
    height: 100%;
    padding-top: 13px;
    background: ${({ theme }) => theme.colors.gray};
  `,
  LayoutWrapper: styled.div`
    display: grid;
    grid-template-rows: 1fr;
    background: ${({ theme }) => theme.colors.gray};
  `,
  MainWrapper: styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-top: 13px;
    background: ${({ theme }) => theme.colors.lighterGrey};
    gap: 15px;
  `,
  MetricWrapper: styled.div`
    width: 100%;
    background: ${({ theme }) => theme.colors.white};
  `,
  RightSideContentWrapper: styled.div`
    background: ${({ theme }) => theme.colors.white};
    width: 100%;
    height: 100%;
  `,
  LoaderWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  `,
};
