import { FC } from 'react';

import { MasterModalWindow } from 'components/MasterModalWindow';
import { DeleteModalWindow } from 'components/DeleteModalWindow';
import { MasterModalWindowAcc } from 'components/MasterModalWindow/MasterModalWindowAcc';

export const MasterModalWindowsBoxAcc: FC<IModalWindowsBoxAcc> = (props) => {
  const {
    deleteItemName,
    headerText,
    text,
    code,
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
      <MasterModalWindowAcc
        isDisableButton={isDisableButton}
        onCloseModalWindowHandler={onCloseModalWindowHandler}
        isModalWindowOpen={isModalWindowOpen}
        headerText={headerText}
        text={text}
        code={code}
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
