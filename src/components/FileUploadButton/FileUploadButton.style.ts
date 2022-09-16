import { styled } from 'styles/theme';

export const FileUploadButtonStyles = {
  ButtonWrapper: styled.div`
    display: flex;
    justify-content: center;
  `,
  Label: styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 110px;
    font-size: ${(props) => props.theme.size.default};
    max-height: 45px;
    min-height: 35px;
    border-radius: 5px;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
    background-color: ${(props) => props.theme.colors.orange};
    color: ${(props) => props.theme.colors.lightGray};
    cursor: pointer;
  `,
};
