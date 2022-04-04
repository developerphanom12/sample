import React from 'react';

import { Icon } from 'components/Icons/Icons';

import { ButtonStyles } from './Button.style';

export type ButtonStyleProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  isDisabled?: boolean;
  themedButton: 'primary' | 'secondary' | 'capium';
  width: 'auth' | 'primary' | 'secondary';
};

export const Button = ({
  themedButton,
  width,
  children,
  onClick,
  isDisabled,
}: ButtonStyleProps) => {
  return (
    <ButtonStyles.Button
      themedButton={themedButton}
      width={width}
      onClick={onClick}
      disabled={isDisabled}
    >
      <ButtonStyles.Content>
        {themedButton === 'capium' && <Icon type="capiumLogo" />}
      </ButtonStyles.Content>
      <ButtonStyles.Content>{children}</ButtonStyles.Content>
    </ButtonStyles.Button>
  );
};
