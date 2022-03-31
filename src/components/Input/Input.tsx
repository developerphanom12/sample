import React from "react";

import { InputStyles } from "./Input.style";

interface InputProps {
  text: string;

  value: string;
  onChangeValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({
  text,

  value,
  onChangeValue,
}) => {
  return (
    <div>
      <InputStyles.Label>{text}</InputStyles.Label>
      <InputStyles.Input value={value} onChange={onChangeValue} />
    </div>
  );
};
