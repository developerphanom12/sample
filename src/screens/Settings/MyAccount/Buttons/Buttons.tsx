import { FC } from 'react';

import { Button } from 'components/Button';
import { ModalButtonsBox } from 'components/ModalButtonsBox';

import { ButtonsStyles as Styled } from './Buttons.style';

interface IButtons {
  settingsButtonText: string;
  onClickSettingsButtonHandler: () => void;
  onCancelbuttonClickHandler: () => void;
  isDisabledButton: boolean;
  isLoading: boolean;
  isCancelButton: boolean;
  isLinkSocialAccButton: boolean;
}

export const Buttons: FC<IButtons> = (props) => {
  const {
    onClickSettingsButtonHandler,
    onCancelbuttonClickHandler,
    isLinkSocialAccButton,
    isCancelButton,
    settingsButtonText,
    isDisabledButton,
    isLoading,
  } = props;
  return (
    <Styled.ButtonsWrapper>
      <Button
        onClick={onClickSettingsButtonHandler}
        themedButton="roundedWhite"
        width={isLinkSocialAccButton ? 'roundedXL' : 'roundedBig'}
      >
        {settingsButtonText}
      </Button>
      <ModalButtonsBox
        buttonPosition="flex-end"
        onCancelClickHandler={onCancelbuttonClickHandler}
        isNoPadding
        isSaveButton
        isCancelButton={isCancelButton}
        isLoading={isLoading}
        isDisableButton={isDisabledButton}
        type="submit"
      />
    </Styled.ButtonsWrapper>
  );
};
