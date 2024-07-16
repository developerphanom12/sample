import { FC } from 'react';

import { MasterModalWindow } from 'components/MasterModalWindow';
import { DeleteModalWindow } from 'components/DeleteModalWindow';

export const MasterModalWindowsBox: FC<IModalWindowsBox> = (props) => {
  const {
    deleteItemName,
    headerText,
    text,
    inputValue,
    isLoading,
    isModalWindowOpen,
    onChangeInputValueHandler,
    onCloseModalWindowHandler,
    onDeleteButtonClickHandler,
    onSaveButtonCLickHandler,
    onEnterCreateItemClick,
    isDeleteModalWindowOpen,
    onCloseDeleteModalWindowHandler,
    isDisableButton,
    categoryName,
  } = props;
  return (
    <>
      <MasterModalWindow
        isDisableButton={isDisableButton}
        onCloseModalWindowHandler={onCloseModalWindowHandler}
        isModalWindowOpen={isModalWindowOpen}
        headerText={headerText}
        text={text}
        onChangeInputValueHandler={onChangeInputValueHandler}
        onSaveButtonCLickHandler={onSaveButtonCLickHandler}
        onEnterCreateItemClick={onEnterCreateItemClick}
        inputValue={inputValue}
        isLoading={isLoading}
      />
      <DeleteModalWindow
        onCloseDeleteModalWindowHandler={onCloseDeleteModalWindowHandler}
        onDeleteButtonClickHandler={onDeleteButtonClickHandler}
        isDeleteModalWindowOpen={isDeleteModalWindowOpen}
        deleteItemName={deleteItemName}
        isLoading={isLoading}
        categoryName={categoryName}
      />
    </>
  );
};
