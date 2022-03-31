import React from "react";
import { Icon } from "components/Icons/Icons";
import { InputPasswordStyles } from "./InputPassword.style";

interface InputProps {
  text: string;
  showPassword: boolean;
  password: string;
  onChangePassword: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}

export const InputPassword: React.FC<InputProps> = ({
  text,
  showPassword,
  password,
  onChangePassword,
  onClick,
}) => {
  return (
    <div>
      <InputPasswordStyles.Label>{text}</InputPasswordStyles.Label>
      <InputPasswordStyles.WrapperInput>
        <InputPasswordStyles.Input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={onChangePassword}
        />
        <InputPasswordStyles.Button onClick={onClick}>
          <Icon type="showPassword" />
        </InputPasswordStyles.Button>
      </InputPasswordStyles.WrapperInput>
    </div>
  );
};
