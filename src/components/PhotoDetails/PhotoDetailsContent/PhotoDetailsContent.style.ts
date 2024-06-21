import { styled } from 'styles/theme';

export const PhotoDetailsContentStyles = {
  Formwrapper: styled.div`
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.white};
    padding: 15px;
    width: 100%;
    height: auto;
    overflow: hidden;
    border-radius: 10px;
    border: 1px solid #00000040;
  `,

  MainWrapper: styled.div`
  overflow-y:auto;
`,
  Wrapper: styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: auto;
    gap:20px;
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
    display: flex;
    gap: 20px;
    // justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  `,
  ChildrenWrapper: styled.div`
    max-width: 248px;
    width: 100%;
  `,
  ItemWrapper: styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    // width: max-content;
  `,
  Label: styled.p<{ isStatus?: boolean }>`
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
    font-size: ${(props) => props.theme.size.default};
    color: ${(props) => props.theme.colors.lightBlack};
    // width: ${({ isStatus }) => (isStatus ? '17%' : '35%')};
    width: 30%;
    min-width: max-content;
    flex-shrink: 0;
    margin-left:5px;
    display:flex;
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
left: 0;
width: 100%;
background-color: ${({ theme }) => theme.colors.white};
padding: 1rem;
box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
z-index: 1000; /* Adjust the z-index as needed */
text-align: center;
border: 1px solid #0000000D;
max-height: 75px;
display:flex;
align-items:center;
  justify-content: space-between;
  gap: 10px;
`,
  Button: styled.button`
background-color: white;
border-radius: 50px;
border: 1px solid #DF1C29;
color: #DF1C29;
padding: 10px;
width: 100px;
height: 40px;
text-align: center;
font-family: 'Source Sans Pro', sans-serif;
font-size: 14px;
font-weight: 600;
&.approve {
  background-color: #DF1C29;
  border-color: #DF1C29;
  color: white;
  width: 200px;
}
&.reject  , &.save , &.cancel{
  margin-left: 10px;
}
  &:nth-child(3) {
    margin-left: auto;
  }
`,
};
