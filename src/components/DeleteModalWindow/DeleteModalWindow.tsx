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
            {`Sure you want to delete the selected records ${categoryName}`}
            <Styled.Highlighter>{deleteItemName}.</Styled.Highlighter> Deleting
            cannot be undone
          </Styled.SubTitle>
          <Styled.ButtonsBox>
            <Styled.ButtonsWrapper>
              <Button
                onClick={onDeleteButtonClickHandler}
                themedButton="roundedWhite"
                width="rounded"
                isLoading={isLoading}
              >
                Yes
              </Button>
              <Button
                onClick={onCloseDeleteModalWindowHandler}
                themedButton="roundedRed"
                width="rounded"
              >
                No
              </Button>
            </Styled.ButtonsWrapper>
          </Styled.ButtonsBox>
        </Styled.MainContentWrapper>
      </Styled.ContentWrapper>
    </Modal>
  );
};
