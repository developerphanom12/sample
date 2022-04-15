import { FC } from 'react';
import Modal from 'react-modal';

import { Icon } from '../Icons/Icons';
import { Button } from '../Button/Button';
import { CloseButton } from '../CloseButton';

import {
  DeleteModalWindowStyles,
  DeleteModalWindowContentStyles as Styled,
} from './DeleteModalWindow.styles';

export const DeleteModalWindow: FC<IDeleteModalWindowProps> = (props) => {
  const {
    isDeleteModalWindowOpen,
    deleteItemName,
    isLoading,
    onDeleteButtonClickHandler,
    onCloseDeleteModalWindowHandler,
  } = props;

  return (
    <Modal
      isOpen={isDeleteModalWindowOpen}
      onRequestClose={onCloseDeleteModalWindowHandler}
      ariaHideApp={false}
      style={DeleteModalWindowStyles}
    >
      <Styled.ContentWrapper>
        <Styled.HeaderBox>
          <Styled.Title>Delete Confirmation</Styled.Title>
          <CloseButton onClickHandler={onCloseDeleteModalWindowHandler} />
        </Styled.HeaderBox>
        <Styled.MainContentWrapper>
          <Icon type='warning' />
          <Styled.SubTitle>
            {`Sure, you want to delete ${deleteItemName} ?`}
          </Styled.SubTitle>
          <Styled.ButtonsBox>
            <Styled.ButtonsWrapper>
              <Button
                onClick={onCloseDeleteModalWindowHandler}
                themedButton="secondary"
                width="secondary"
              >
                No
              </Button>
              <Button
                onClick={onDeleteButtonClickHandler}
                themedButton="primary"
                width="primary"
                isLoading={isLoading}
              >
                Yes
              </Button>
            </Styled.ButtonsWrapper>
          </Styled.ButtonsBox>
        </Styled.MainContentWrapper>
      </Styled.ContentWrapper>
    </Modal>
  );
};
