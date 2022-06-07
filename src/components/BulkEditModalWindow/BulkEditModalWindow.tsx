import { FC } from 'react';
import ReactModal from 'react-modal';

import { ModalWindowHeader } from '../ModalWindowHeader';
import { BulkEditContent } from './BulkEditContent/BulkEditContent';
import { BulkModalStyles } from './BulkEditModalWindow.style';

interface IEmailModalWindowProps {
  onCloseModalWindowHandler: () => void;
  isModalWindowOpen: boolean;
}

export const BulkEditModalWindow: FC<IEmailModalWindowProps> = (props) => {
  const { isModalWindowOpen, onCloseModalWindowHandler } = props;
  return (
    <ReactModal
      isOpen={isModalWindowOpen}
      onRequestClose={onCloseModalWindowHandler}
      ariaHideApp={false}
      style={BulkModalStyles}
    >
      <ModalWindowHeader
        headerTitle={'Bulk Edit'}
        onCloseButtonHandler={() => {}}
      />
      <BulkEditContent />
    </ReactModal>
  );
};
