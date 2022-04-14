import { FC } from 'react';

import { Button } from '../Button';

import { ModalButtonsBoxStyles as Styled } from './ModalButtonsBox.style';

export const ModalButtonsBox: FC = () => (
  <Styled.ButtonsBox>
    <Styled.ButtonsWrapper>
      <Button themedButton="secondary" width="secondary">
        Cancel
      </Button>
      <Button themedButton="primary" width="secondary">
        Send
      </Button>
    </Styled.ButtonsWrapper>
  </Styled.ButtonsBox>
);
