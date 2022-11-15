import { FC } from 'react';

import { RadioButton } from '../../../RadioButton';

import { RadioButtonsBoxStyles as Styled } from './RadioButtonsBox.style';

interface IRadioButtonsBox {
  radioButtonValue: string;
  onChangeRadioButtonHandler: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
}
export const RadioButtonsBox: FC<IRadioButtonsBox> = (props) => {
  const { onChangeRadioButtonHandler, radioButtonValue } = props;
  return (
    <Styled.RadioButtonWrapper>
      <RadioButton
        isChecked={radioButtonValue === 'accepted'}
        value="accepted"
        onChange={onChangeRadioButtonHandler}
        labelText="Accepted"
      />
      <RadioButton
        isChecked={radioButtonValue === 'rejected'}
        value="rejected"
        onChange={onChangeRadioButtonHandler}
        labelText="Rejected"
      />
    </Styled.RadioButtonWrapper>
  );
};
