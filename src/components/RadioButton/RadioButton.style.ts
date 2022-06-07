import { styled } from 'app/theme';

export const RadioButtonStyles = {
  RadioButtonWrapper: styled.div`
    display: flex;
    align-items: center;
    height: 18px;
    width: 18px;
  `,
  StyledRadioButton: styled.div<{ isChecked: boolean }>`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) =>
      props.isChecked ? props.theme.colors.orange : 'transparent'};
    border-radius: 50%;
    border: solid 3px ${(props) => props.theme.colors.black};
    transition: all 50ms;
    cursor: pointer;
  `,
  RadioButtonLabel: styled.label`
    display: flex;
    align-items: center;
    margin-right: 8px;
    margin-bottom: 2px;
  `,
  HiddenRadioButtonInput: styled.input`
    border: 0;
    clip: rect(0 0 0 0);
    height: 0px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  `,
  LabelText: styled.span`
    margin-left: 13px;
    color: ${(props) => props.theme.colors.black};
    font-weight: ${(props) => props.theme.fontWeight.normal};
    font-size: ${(props) => props.theme.size.default};
    cursor: pointer;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: 40px;
    max-width: 80px;
  `,
};
