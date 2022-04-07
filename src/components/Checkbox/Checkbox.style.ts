import { styled } from "app/theme";

export const Checkbox = {
  CheckboxContainer: styled.div`
    display: inline-block;
    vertical-align: middle;
  `,
  HiddenCheckbox: styled.input.attrs({ type: "checkbox" })`
    border: 0;
    clip: rect(0 0 0 0);
    clippath: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  `,
  StyledCheckbox: styled.div<{ isChecked: boolean }>`
    display: inline-block;
    width: 18px;
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) =>
      props.isChecked ? props.theme.colors.black : "transparent"};
    border-radius: 3px;
    border: solid 2px ${(props) => props.theme.colors.black};
    transition: all 50ms;
    cursor: pointer;
  `,
};
