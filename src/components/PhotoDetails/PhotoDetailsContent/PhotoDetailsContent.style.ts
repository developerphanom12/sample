import { styled } from 'styles/theme';

export const PhotoDetailsContentStyles = {
  MainWrapper: styled.div`
    overflow-y: auto;
  `,
  Wrapper: styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: auto;
    gap: 20px;
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
    margin-bottom: 30px;
  `,
  ChildrenWrapper: styled.div`
    max-width: 248px;
    width: 100%;
  `,
  ItemWrapper: styled.div`
    display: flex;
    align-items: center;
  `,
  Label: styled.p<{ isStatus?: boolean }>`
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
    font-size: ${(props) => props.theme.size.default};
    color: ${(props) => props.theme.colors.lightBlack};
    width: ${({ isStatus }) => (isStatus ? '17%' : '35%')};
    margin-left: 5px;
    display: flex;
    align-items: center;
  `,
  FlexContainer: styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  `,
  ContentContainer: styled.div`
    flex-grow: 1;
    overflow-y: auto;
  `,
  ButtonsBoxWrapper: styled.div`
    margin-top: 20px;
  `,
  Footer: styled.footer`
    position: fixed;
    bottom: 0;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 1rem;
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
    z-index: 1000; /* Adjust the z-index as needed */
    text-align: center;
    border: 1px solid #0000000D;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
};

