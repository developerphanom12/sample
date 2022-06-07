import { styled } from 'app/theme';

export const ReceiptDetailsStyles = {
  Section: styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.lighterGrey};
    overflow: hidden;
  `,
  LeftContentWrapper: styled.div`
    background: ${({ theme }) => theme.colors.white};
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-right: 15px;
  `,
  Wrapper: styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    width: 100%;
    background: ${({ theme }) => theme.colors.lighterGrey};
    padding: 15px 35px;
    overflow: hidden;
  `,
};
