import { styled } from 'app/theme';

export const MasterStyles = {
  Section: styled.section`
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.lighterGrey};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  `,
  TabHeader: styled.div`
    width: 100%;
    min-height: 55px;
    margin-bottom: 15px;
    background: ${({ theme }) => theme.colors.white};
    margin-bottom: 15px;
  `,
  ContentWrapper: styled.div`
    background: ${({ theme }) => theme.colors.white};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-wrap: wrap;
    height: 100%;
  `,
  TabContent: styled.div<{ active: boolean }>`
    ${(props) =>
      props.active
        ? 'display: flex; flex-flow: column nowrap'
        : 'display: none'};
    height: 100%;
    flex: 1;
  `,
};
