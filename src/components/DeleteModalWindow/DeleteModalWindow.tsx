import { FC } from 'react';
import Modal from 'react-modal';

import { Button } from '../Button/Button';

import {
  DeleteModalWindowStyles,
  DeleteModalWindowContentStyles as Styled,
} from './DeleteModalWindow.styles';

export const DeleteModalWindow: FC<IDeleteModalWindowProps> = (props) => {
  const {
    isDeleteModalWindowOpen,
    deleteItemName,
    isLoading,
    categoryName,
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
      <Styled.ContentWrapper data-testid="modal-window">
        <Styled.Title>Confirm delete</Styled.Title>
        <Styled.MainContentWrapper>
          <Styled.SubTitle>
            {`Please confirm you want to delete ${categoryName} `}
            <Styled.Highlighter>{deleteItemName}.</Styled.Highlighter> Deleting
            cannot be undone
          </Styled.SubTitle>
          <Styled.ButtonsBox>
            <Styled.ButtonsWrapper>
              <Button
                onClick={onDeleteButtonClickHandler}
                themedButton="roundedRed"
                width="rounded"
                isLoading={isLoading}
              >
                Delete
              </Button>
              <Button
                onClick={onCloseDeleteModalWindowHandler}
                themedButton="roundedWhite"
                width="rounded"
              >
                Cancel
              </Button>
            </Styled.ButtonsWrapper>
          </Styled.ButtonsBox>
        </Styled.MainContentWrapper>
      </Styled.ContentWrapper>
    </Modal>
  );
};
