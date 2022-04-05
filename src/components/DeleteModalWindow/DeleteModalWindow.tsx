import { FC } from 'react';
import Modal from 'react-modal';

import { Icon } from '../Icons/Icons';
import { Button } from '../Button/Button';
import { CloseButton } from '../CloseButton';

import {
  DeleteModalWindowStyles,
  DeleteModalWindowContentStyles as Styled,
} from './DeleteModalWindow.styles';

interface IDeleteModalWindowProps {
  onCloseModalWindowHandler: () => void;
  isModalWindowOpen: boolean;
  categoryName: string;
  itemName: string;
}
export const DeleteModalWindow: FC<IDeleteModalWindowProps> = (props) => {
  const {
    isModalWindowOpen,
    itemName,
    categoryName,
    onCloseModalWindowHandler,
  } = props;

  return (
    <Modal
      isOpen={isModalWindowOpen}
      onRequestClose={onCloseModalWindowHandler}
      ariaHideApp={false}
      style={DeleteModalWindowStyles}
    >
      <Styled.ContentWrapper>
        <Styled.HeaderBox>
          <Styled.Title>Delete Confirmation</Styled.Title>
          <CloseButton onClickHandler={onCloseModalWindowHandler} />
        </Styled.HeaderBox>
        <Styled.MainContentWrapper>
          <Icon type="warning" />
          <Styled.SubTitle>
            {`Sure, you want to delete ${categoryName} “${itemName}” ?`}
          </Styled.SubTitle>
          <Styled.ButtonsBox>
            <Styled.ButtonsWrapper>
              <Button themedButton="secondary" width="secondary">
                Yes
              </Button>
              <Button themedButton="primary" width="primary">
                No
              </Button>
            </Styled.ButtonsWrapper>
          </Styled.ButtonsBox>
        </Styled.MainContentWrapper>
      </Styled.ContentWrapper>
    </Modal>
  );
};
