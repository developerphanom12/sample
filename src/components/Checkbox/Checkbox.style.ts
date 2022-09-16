import { styled } from 'styles/theme';

export const Checkbox = {
  CheckboxContainer: styled.div`
    display: flex;
    width: 18px;
    height: 18px;
  `,
  HiddenCheckbox: styled.input`
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  `,
  StyledCheckbox: styled.div<{ isChecked: boolean }>`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) =>
      props.isChecked ? props.theme.colors.orange : 'transparent'};
    border-radius: 3px;
    border: solid 2px
      ${(props) =>
        props.isChecked ? props.theme.colors.orange : props.theme.colors.black};
    transition: all 50ms;
    cursor: pointer;
  `,
  LabelText: styled.span`
    margin-left: 13px;
    color: ${(props) => props.theme.colors.black};
    font-weight: ${(props) => props.theme.fontWeight.normal};
    font-size: ${(props) => props.theme.size.default};
    cursor: pointer;
  `,
  Label: styled.label`
    display: flex;
    align-items: center;
    position: relative;
  `,
};
