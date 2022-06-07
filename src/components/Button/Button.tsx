import React from 'react';

import { Icon } from 'components/Icons/Icons';

import { ButtonStyles } from './Button.style';
import { LoaderComponent } from '../Loader';

export type ButtonStyleProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  isDisabled?: boolean;
  type?: 'submit' | 'reset' | 'button';
  isLoading?: boolean;
  themedButton: 'primary' | 'secondary' | 'capium';
  width: 'auth' | 'primary' | 'secondary' | 'actions';
};

export const Button = ({
  themedButton,
  width,
  children,
  onClick,
  type,
  isDisabled,
  isLoading,
}: ButtonStyleProps) => {
  return (
    <ButtonStyles.Button
      type={type || 'button'}
      themedButton={themedButton}
      width={width}
      onClick={onClick}
      disabled={isDisabled}
    >
      <ButtonStyles.Content>
        {themedButton === 'capium' && <Icon type="capiumLogo" />}
      </ButtonStyles.Content>
      {width === 'actions' && <Icon type="threeDots" />}
      <ButtonStyles.Content>
        {isLoading ? <LoaderComponent /> : children}
      </ButtonStyles.Content>
    </ButtonStyles.Button>
  );
};
