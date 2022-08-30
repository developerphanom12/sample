import { styled } from 'app/theme';

export const UserListStyles = {
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
};
