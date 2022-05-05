import React from 'react';

import { Icon } from 'components/Icons/Icons';

import { Checkbox } from './Checkbox.style';

export interface CheckboxProps {
  children?: React.ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  labelText?: string;
  isChecked: boolean;
}

export const CheckboxItem = (props: CheckboxProps) => {
  const { isChecked, labelText, onChange, name } = props;

  return (
    <Checkbox.Label>
      <Checkbox.CheckboxContainer>
        <Checkbox.HiddenCheckbox
          type="checkbox"
          id={name}
          name={name}
          onChange={() => {}}
          checked={isChecked}
        />
        <Checkbox.StyledCheckbox isChecked={isChecked}>
          {!!isChecked && <Icon type="checkbox" />}
        </Checkbox.StyledCheckbox>
      </Checkbox.CheckboxContainer>
      <Checkbox.LabelText>{labelText}</Checkbox.LabelText>
    </Checkbox.Label>
  );
};
