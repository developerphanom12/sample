import { FC } from 'react';

import { Button } from '../Button';

import { ModalButtonsBoxStyles as Styled } from './ModalButtonsBox.style';

interface IModalButtonsBox {
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
            onClick={onCancelClickHandler}
            themedButton="secondary"
            width="secondary"
          >
            Cancel
          </Button>
        )}
        <Button
          isLoading={isLoading}
          themedButton="primary"
          width="secondary"
          isDisabled={isDisableButton}
          type={type}
          onClick={onSaveButtonCLickHandler}
        >
          {isSaveButton ? 'Save' : 'Send'}
        </Button>
      </Styled.ButtonsWrapper>
    </Styled.ButtonsBox>
  );
};
