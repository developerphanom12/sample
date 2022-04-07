import React from "react";

import { Icon } from "components/Icons/Icons";

import { Checkbox } from "./Checkbox.style";

export interface CheckboxProps {
  isChecked: boolean;
  children?: React.ReactNode;
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
}

export const CheckboxItem = (props: CheckboxProps) => {
  const { isChecked, children } = props;
  return (
    <Checkbox.CheckboxContainer>
      <Checkbox.HiddenCheckbox />
      <Checkbox.StyledCheckbox isChecked={isChecked}>
        {!!isChecked && <Icon type="checkbox" />}
        {children}
      </Checkbox.StyledCheckbox>
    </Checkbox.CheckboxContainer>
  );
};
