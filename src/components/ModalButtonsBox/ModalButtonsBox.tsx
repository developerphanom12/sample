import { FC } from 'react';

import { Button } from '../Button';

import { ModalButtonsBoxStyles as Styled } from './ModalButtonsBox.style';

interface IModalButtonsBox {
  saveButtonText?: string;
  isNoPadding?: boolean;
  isCancelButton?: boolean;
  isSaveButton?: boolean;
  type?: 'submit' | 'reset' | 'button' | undefined;
  isLoading?: boolean;
  isDisableButton?: boolean;
  onSaveButtonCLickHandler?: () => void;
  onCancelClickHandler?: () => void;
}

export const ModalButtonsBox: FC<IModalButtonsBox> = (props) => {
  const {
    onSaveButtonCLickHandler,
    onCancelClickHandler,
    saveButtonText,
    isSaveButton,
    isDisableButton,
    isLoading,
    isNoPadding,
    isCancelButton,
    type,
  } = props;
  return (
    <Styled.ButtonsBox isNoPadding={isNoPadding}>
      <Styled.ButtonsWrapper isCancelButton={isCancelButton}>
        {!isCancelButton && (
          <Button
            onClick={onSaveButtonCLickHandler}
            themedButton="roundedRed"
            width="rounded"
            isDisabled={isDisableButton}
            isLoading={isLoading}
            type={type}
          >
            {!!saveButtonText ? saveButtonText : isSaveButton ? 'Save' : 'Send'}
          </Button>
        )}
        <Button
          onClick={onCancelClickHandler}
          themedButton="roundedWhite"
          width="rounded"
        >
          Cancel
        </Button>
      </Styled.ButtonsWrapper>
    </Styled.ButtonsBox>
  );
};
