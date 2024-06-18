import React, { FC, useState, useEffect } from 'react';
import { Button } from '../../Button';
import { ButtonsBoxStyles as Styled } from './ButtonsBox.style';

interface IButtonBoxProps {
  secondButtonText?: string;
  onUploadButtonClickHandler?: () => Promise<void>;
  onCancelButtonClickHandler?: () => void;
  onApproveButtonClickHandler?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onRejectButtonClickHandler?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  isLoading?: boolean;
  buttonValue?: string;
}

export const ButtonsBox: FC<IButtonBoxProps> = ({
  onUploadButtonClickHandler,
  onCancelButtonClickHandler,
  onApproveButtonClickHandler,
  isLoading,
  buttonValue,
}) => {
  const [selectedButton, setSelectedButton] = useState<string | null>(null);

  const handleButtonClick = (
    buttonType: string,
    handler?: () => void | Promise<void>,
    event?: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setSelectedButton(buttonType);
    if (handler) {
      handler();
    }
  };

  const handleApproveButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (onApproveButtonClickHandler) {
      const customEvent = {
        ...event,
        currentTarget: { ...event.currentTarget, value: 'accepted' }
      };
      onApproveButtonClickHandler(customEvent as React.MouseEvent<HTMLButtonElement, MouseEvent>);
    }
    setSelectedButton('accepted');
  };

  useEffect(() => {
    if (selectedButton) {
      const timer = setTimeout(() => {
        setSelectedButton(null);
      }, 300); // delay in ms, adjust as needed
      return () => clearTimeout(timer); // cleanup timeout if component unmounts
    }
  }, [selectedButton]);

  return (
    <Styled.ButtonsBox>
      <Styled.ButtonsWrapper>
        <Button
          onClick={handleApproveButtonClick}
          themedButton={selectedButton === 'accepted' ? 'roundedRed' : 'roundedWhite'}
          width="rounded"
          isLoading={isLoading}
          isDisabled={isLoading}
        >
          {'Approve & Save'}
        </Button>
        <Button
          onClick={onUploadButtonClickHandler}
          themedButton={selectedButton === 'save' ? 'roundedRed' : 'roundedWhite'}
          width="rounded"
          isLoading={isLoading}
          isDisabled={isLoading}
        >
          {'Save'}
        </Button>
        <Button
          onClick={(event) => handleButtonClick('cancel', onCancelButtonClickHandler, event)}
          themedButton={selectedButton === 'cancel' ? 'roundedRed' : 'roundedWhite'}
          width="rounded"
          isDisabled={isLoading}
        >
          {'Cancel'}
        </Button>
      </Styled.ButtonsWrapper>
    </Styled.ButtonsBox>
  );
};
