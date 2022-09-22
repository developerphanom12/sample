import { styled } from 'styles/theme';

export const PhotoDetailsContentStyles = {
  MainWrapper: styled.div`
    overflow-y: scroll;
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-flow: column;
    padding: 10px 10px 10px 0;
    height: 100%;
  `,
  RadioButtonWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 80%;
    height: 45px;
  `,
  FieldWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  InputFieldWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  ContentWrapper: styled.div`
    display: flex;
  `,
  StatusBarWrapper: styled.div`
    height: 60px;
    margin-bottom: 10px;
  `,

  ChildrenWrapper: styled.div`
    max-width: 248px;
    width: 100%;
  `,
  CheckBoxWrapper: styled.div`
    height: 45px;
    display: flex;
    align-items: center;
  `,
  ItemWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    margin-bottom: 12px;
  `,
  Label: styled.p`
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
    font-size: ${(props) => props.theme.size.default};
    color: ${(props) => props.theme.colors.lightBlack};
    min-width: 85px;
    width: 100%;
  `,
};
