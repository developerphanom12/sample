import { styled } from 'app/theme';

export const AccountFieldsStyle = {
  FieldsWrapper: styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 0 0 30px;
    @media (max-width: 1445px) {
      padding-bottom: 27px;
    }
  `,
  ResetFieldsWrapper: styled.div`
    display: flex;
    flex-direction: column;
    max-width: 500px;
    width: 100%;
    margin-bottom: 20px;
  `,
  ResetPasswordFiledsWrapper: styled.div`
    padding: 0px 0 30px;
    &:not(:last-child) {
      margin-top: 15px;
    }
    &:not(:first-child) {
      margin-bottom: 25px;
    }
  `,
};
