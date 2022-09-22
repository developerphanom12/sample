import { FC } from 'react';

import {
  RadioButtonStyles as Styled,
  RadioButtonWrapper,
} from './RadioButton.style';

interface IRadioButtonProps {
  labelText?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isChecked: boolean;
  value: string;
}
export const RadioButton: FC<IRadioButtonProps> = (props) => {
  const { labelText, isChecked, value, onChange } = props;
  return (
    <Styled.RadioButtonLabel isChecked={isChecked}>
      <RadioButtonWrapper>
        <Styled.HiddenRadioButtonInput
          onChange={onChange}
          value={value}
          type="radio"
          checked={isChecked}
        />
        <Styled.StyledRadioButton isChecked={isChecked} />
      </RadioButtonWrapper>
      <Styled.LabelText>{labelText}</Styled.LabelText>
    </Styled.RadioButtonLabel>
  );
};
