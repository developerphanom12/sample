import { FC } from 'react';

import { Button } from '../../Button';
import { ButtonsBoxStyles as Styled } from './ButtonsBox.style';

interface IButtonBoxProps {
  secondButtonText?: string;
  onUploadButtonClickHandler?: () => Promise<void>;
  onCancelButtonClickHandler?: () => void;
  isLoading?: boolean;
}
export const ButtonsBox: FC<IButtonBoxProps> = (props) => {
  const {
    onUploadButtonClickHandler,
    onCancelButtonClickHandler,
    secondButtonText,
    isLoading,
  } = props;
  return (
    <Styled.ButtonsBox>
      <Styled.ButtonsWrapper>
        <Button
          onClick={onCancelButtonClickHandler}
          themedButton="secondary"
          width="primary"
          isDisabled={isLoading}
        >
          Cancel
        </Button>
        <Button
          onClick={onUploadButtonClickHandler}
          themedButton="primary"
          width="primary"
          isLoading={isLoading}
          isDisabled={isLoading}
        >
          {secondButtonText || 'Send'}
        </Button>
      </Styled.ButtonsWrapper>
    </Styled.ButtonsBox>
  );
};
