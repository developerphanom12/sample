import { FC } from 'react';

import { RadioButtonStyles as Styled } from './RadioButton.style';

interface IRadioButtonProps {
  labelText?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isChecked: boolean;
  value: string;
}
export const RadioButton: FC<IRadioButtonProps> = (props) => {
  const { labelText, isChecked, value, onChange } = props;
  return (
    <Styled.RadioButtonLabel>
      <Styled.RadioButtonWrapper isChecked={isChecked}>
        <Styled.HiddenRadioButtonInput
          onChange={onChange}
          value={value}
          type="radio"
          checked={isChecked}
        />
        <Styled.StyledRadioButton isChecked={isChecked} />
      </Styled.RadioButtonWrapper>
      <Styled.LabelText>{labelText}</Styled.LabelText>
    </Styled.RadioButtonLabel>
  );
};
