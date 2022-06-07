import { styled } from 'app/theme';

export const MyAccountStyles = {
  LayoutWrapper: styled.section`
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    padding: 38px 40px 20px 38px;
    background: ${({ theme }) => theme.colors.white};
    position: relative;
  `,
  ContentWrapper: styled.div<{ isResetPassword: boolean }>`
    max-width: ${({ isResetPassword }) =>
      isResetPassword ? '500px' : '1050px'};
    width: 100%;
    @media (max-width: 1445px) {
      max-width: 500px;
    }
  `,
  Title: styled.h2`
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.size.xnormal};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    margin-bottom: 35px;
  `,
  Form: styled.form`
    @media (max-width: 1445px) {
      max-height: calc(100vh - 245px);
      overflow-y: scroll;
      padding-right: 5px;
    }
  `,
  FieldsWrapper: styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 0px 0 30px;
  `,
  ResetFieldsWrapper: styled.div`
    display: flex;
    flex-direction: column;
    max-width: 500px;
    width: 100%;
    margin-bottom: 20px;
  `,
  ResetPasswordFiledsWrapper: styled.div`
    padding: 35px 0 30px;
    &:not(:last-child) {
      margin-top: 15px;
    }
    &:not(:first-child) {
      margin-bottom: 25px;
    }
  `,
  LoaderWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  `,
  SuccessPopupWrapper: styled.div`
    position: absolute;
    right: 0;
    top: 10px;
    max-width: 290px;
    width: 100%;
  `,
};
