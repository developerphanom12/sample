import React from "react";
import { ButtonStyles } from "./Button.style";
import { Icon } from "components/Icons/Icons";

export type ButtonStyleProps = {
  themedButton: "primary" | "secondary" | "capium";
  width: "auth" | "primary" | "secondary";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
};

export const Button = ({
  themedButton,
  width,
  children,
  onClick,
}: ButtonStyleProps) => {
  return (
    <ButtonStyles.Button
      themedButton={themedButton}
      width={width}
      onClick={onClick}
    >
      <ButtonStyles.Content>
        {themedButton === "capium" && <Icon type="capiumLogo" />}
      </ButtonStyles.Content>
      <ButtonStyles.Content>{children}</ButtonStyles.Content>
    </ButtonStyles.Button>
  );
};
