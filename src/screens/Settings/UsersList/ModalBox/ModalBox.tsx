import { FC } from 'react';
import { FieldInputProps, FieldMetaProps } from 'formik';

import { DeleteModalWindow } from 'components/DeleteModalWindow';
import { InsertUserModalWindow } from 'components/InsertUserModalWindow';

import { TInputFields } from '../../MyAccount/types/MyAccount.types';

interface IUserListModalBoxProps
  extends Omit<
    IModalWindowsBox,
    'onSaveButtonCLickHandler' | 'onChangeInputValueHandler' | 'inputValue'
  > {
  onSaveButtonCLickHandler: (
    e?: React.FormEvent<HTMLFormElement> | undefined
  ) => void;
  formikMeta: (name: string) => FieldMetaProps<string>;
  formikProps: (nameOrOptions: string) => FieldInputProps<string>;
  modalFields: TInputFields;
  isEdit: boolean;
  isInvitation: boolean;
  isUserList: boolean;
}
export const ModalBox: FC<IUserListModalBoxProps> = (props) => {
  const {
    deleteItemName,
    headerText,
    isDeleteModalWindowOpen,
    isLoading,
    isModalWindowOpen,
    isDisableButton,
    isUserList,
    onCloseModalWindowHandler,
    onDeleteButtonClickHandler,
    formikMeta,
    formikProps,
    modalFields,
    onSaveButtonCLickHandler,
    onEnterCreateItemClick,
    onCloseDeleteModalWindowHandler,
    isEdit,
    isInvitation,
  } = props;

  return (
    <>
      <InsertUserModalWindow
        modalFields={modalFields}
        isLoading={isLoading}
        isDisableButton={isDisableButton}
        onCloseModalWindowHandler={onCloseModalWindowHandler}
        onSaveButtonCLickHandler={onSaveButtonCLickHandler}
        onEnterCreateItemClick={onEnterCreateItemClick}
        isModalWindowOpen={isModalWindowOpen}
        headerText={headerText}
        formikMeta={formikMeta}
        formikProps={formikProps}
        isEdit={isEdit}
        isInvitation={isInvitation}
        isUserList={isUserList}
      />
      <DeleteModalWindow
        isLoading={isLoading}
        onCloseDeleteModalWindowHandler={onCloseDeleteModalWindowHandler}
        onDeleteButtonClickHandler={onDeleteButtonClickHandler}
        isDeleteModalWindowOpen={isDeleteModalWindowOpen}
        deleteItemName={`user ${deleteItemName}`}
      />
    </>
  );
};
