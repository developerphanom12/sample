import { styled } from 'app/theme';

export const FieldItemStyles = {
  Label: styled.p`
    font-family: ${(props) => props.theme.font.openSans};
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
    font-size: ${(props) => props.theme.size.default};
    color: ${(props) => props.theme.colors.black};
    margin-bottom: 10px;
  `,
  FieldWrapper: styled.div`
    display: flex;
    flex-direction: column;
    max-width: 500px;
    width: 100%;
    margin-right: 50px;
    margin-bottom: 24px;
    &:nth-child(2n) {
      margin-right: 0px;
    }
    &:last-child {
      margin-bottom: 0;
    }
  `,
};
