import { styled } from 'app/theme';

export const PhotoDetailsContentStyles = {
  MainWrapper: styled.div`
    overflow-y: scroll;
    width: 100%;
    overflow-y: scroll;
    height: 490px;
    max-width: 600px;
    display: flex;
    flex-flow: column;
    padding: 10px;
    height: 100%;
  `,
  RadioButtonWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 80%;
  `,
  RadioButtonWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 80%;
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

  ChildrenWrapper: styled.div`
    max-width: 381px;
    width: 100%;
  `,
  ItemWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    align-items: center;
    margin-bottom: 12px;
  `,
  Label: styled.p`
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
    font-size: ${(props) => props.theme.size.default};
    color: ${(props) => props.theme.colors.black};
    min-width: 85px;
    width: 100%;
  `,
};
