import { styled } from 'app/theme';

export const ForgotPasswordStyles = {
  MainWrapper: styled.div`
    display: flex;
    width: 100%;
  `,
  Section: styled.section`
    display: flex;
    width: 100%;
  `,
  RightSideContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
    padding: 174px 151px 0 69px;
    width: 100%;
  `,
  SubTitle: styled.p`
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
    font-size: ${(props) => props.theme.size.default};
    color: ${(props) => props.theme.colors.black};
    margin-bottom: ${(props) => props.theme.size.small};
  `,
  Title: styled.p`
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
    font-size: ${(props) => props.theme.size.title};
    color: ${(props) => props.theme.colors.orange};
    padding-bottom: 7px;
  `,
  TitleWrapper: styled.div`
    display: flex;
    flex-direction: column;
    width: fit-content;
    max-width: 257px;
    margin-bottom: 38px;
  `,
  Line: styled.div`
    height: 2px;
    background: ${({ theme }) => theme.colors.orange};
    border-radius: 10px;
    width: 100%;
  `,
  Form: styled.form`
    max-width: 500px;
    width: 100%;
  `,
};
