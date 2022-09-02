import { styled } from 'app/theme';

export const InvitesStyles = {
  Section: styled.section`
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.white};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;
  `,
  TableWrapper: styled.div`
    width: 100%;
  `,
  LoaderWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
  `,
  SuccessPopupWrapper: styled.div`
    position: absolute;
    right: 0;
    max-width: 290px;
    width: 100%;
  `,
  ContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 30px;
    flex: 1 0 auto;
  `,
};
