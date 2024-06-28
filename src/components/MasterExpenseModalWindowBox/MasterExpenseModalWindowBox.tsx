import { FC } from 'react';

import { DeleteModalWindow } from 'components/DeleteModalWindow';
import { MasterExpenseModalWindow } from 'components/MasterExpenseModalWindow/MasterModalWindow';

export const MasterExpenseModalWindowBox: FC<IModalExpenseWindowsBox> = (props) => {
  const {
    deleteItemName,
    headerText,
    inputValue,
    isLoading,
    isModalWindowOpen,
    onChangeInputValueHandler,
    onChangeExpenseDateValueHandler,
    onChangeExpenseNameValueHandler,
    onCloseModalWindowHandler,
    onDeleteButtonClickHandler,
    onSaveButtonCLickHandler,
    onEnterCreateItemClick,
    isDeleteModalWindowOpen,
    onCloseDeleteModalWindowHandler,
    isDisableButton,
    categoryName,
    dateValue,
    reportName
  } = props;
  return (
    <>
      <MasterExpenseModalWindow
        isDisableButton={isDisableButton}
        onCloseModalWindowHandler={onCloseModalWindowHandler}
        isModalWindowOpen={isModalWindowOpen}
        headerText={headerText}
        onChangeInputValueHandler={onChangeInputValueHandler}
        onChangeExpenseDateValueHandler={onChangeExpenseDateValueHandler}
        onChangeExpenseNameValueHandler={onChangeExpenseNameValueHandler}
        onSaveButtonCLickHandler={onSaveButtonCLickHandler}
        onEnterCreateItemClick={onEnterCreateItemClick}
        inputValue={inputValue}
        dateValue={dateValue}
        reportName={reportName}
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
