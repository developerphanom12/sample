import { FC } from 'react';
import ReactModal from 'react-modal';

import { Input } from '../Input/Input';
import { ModalButtonsBox } from '../ModalButtonsBox';
import { ModalWindowHeader } from '../ModalWindowHeader';
import { ReceiptItem } from '../ReceiptItem';
import { receipts } from './constants';
import { useEmailModalWindowState } from './EmailModalWindow.state';
import {
  EmailModalStyles,
  EmailModalWindowStyles as Styled,
} from './EmailModalWindow.style';

interface IEmailModalWindowProps {
  onCloseModalWindowHandler: () => void;
  isModalWindowOpen: boolean;
}

export const EmailModalWindow: FC<IEmailModalWindowProps> = (props) => {
  const { isModalWindowOpen, onCloseModalWindowHandler } = props;
  const { inputFields } = useEmailModalWindowState();
  return (
    <ReactModal
      isOpen={isModalWindowOpen}
      onRequestClose={onCloseModalWindowHandler}
      ariaHideApp={false}
      style={EmailModalStyles}
    >
      <ModalWindowHeader
        headerTitle={'Email'}
        onCloseButtonHandler={() => {}}
      />
      <Styled.MainContentWrapper>
        {inputFields.map((input) => (
          <Input
            key={input.label}
            inputHeight={input.height}
            isTextArea={input.isTextArea}
            onChangeValue={input.onChange}
            value={input.value}
            text={input.label}
          />
        ))}
        {receipts.length && (
          <>
            <Styled.Label>Attachment(s)</Styled.Label>
            <Styled.AttachmentsWrapper>
              {receipts.map((receipt, index) => (
                <ReceiptItem
                  onDeleteReceiptHandler={() => {}}
                  receiptNumber={index + 1}
                  receiptId={receipt.id}
                />
              ))}
            </Styled.AttachmentsWrapper>
          </>
        )}
      </Styled.MainContentWrapper>
      <ModalButtonsBox />
    </ReactModal>
  );
};
