import { FC } from 'react';
import { FieldInputProps, FieldMetaProps } from 'formik';
import ReactModal from 'react-modal';

import { ModalButtonsBox } from '../ModalButtonsBox';
import { ModalWindowHeader } from '../ModalWindowHeader';
import { InsertUserModalWindowStyles as Styled } from './InsertUserModalWindow.style';
import { UserModalWindowStyles } from './InsertUserModalWindow.style';
import { ModalInputs } from './ModalInputs/ModalInputs';
import { TInputFields } from './types/insertUser.types';

interface InsertUserModalWindowProps
  extends Omit<
    IMasterModalWindowProps,
    'onChangeInputValueHandler' | 'inputValue' | 'onSaveButtonCLickHandler'
  > {
  onSaveButtonCLickHandler: (
    e?: React.FormEvent<HTMLFormElement> | undefined
  ) => void;
  formikMeta: (name: string) => FieldMetaProps<string>;
  formikProps: (nameOrOptions: string) => FieldInputProps<string>;
  modalFields: TInputFields;
  isEdit: boolean;
  isUserList: boolean;
  isInvitation: boolean;
}

export const InsertUserModalWindow: FC<InsertUserModalWindowProps> = (
  props
) => {
  const {
    headerText,
    isUserList,
    isLoading,
    isModalWindowOpen,
    onCloseModalWindowHandler,
    onEnterCreateItemClick,
    onSaveButtonCLickHandler,
    isDisableButton,
    formikMeta,
    formikProps,
    modalFields,
    isEdit,
    isInvitation,
  } = props;

  const modalStyles =
    (isEdit && isInvitation && isUserList) || modalFields.length === 3
      ? {
          content: { ...UserModalWindowStyles.content, maxHeight: '450px' },
          overlay: UserModalWindowStyles.overlay,
        }
      : isEdit && !isInvitation && isUserList
      ? {
          content: { ...UserModalWindowStyles.content, maxHeight: '300px' },
          overlay: UserModalWindowStyles.overlay,
        }
      : modalFields.length === 2
      ? {
          content: { ...UserModalWindowStyles.content, maxHeight: '370px' },
          overlay: UserModalWindowStyles.overlay,
        }
      : UserModalWindowStyles;

  const fields =
    isEdit && isInvitation && isUserList
      ? modalFields.slice(0, 3)
      : isEdit && !isInvitation && isUserList
      ? modalFields.slice(2, 3)
      : modalFields;

  return (
    <ReactModal
      isOpen={isModalWindowOpen}
      onRequestClose={onCloseModalWindowHandler}
      ariaHideApp={false}
      style={modalStyles}
    >
      <ModalWindowHeader headerTitle={headerText} />
      <Styled.Content>
        <Styled.Form onSubmit={onSaveButtonCLickHandler}>
          <Styled.InputsWrapper>
            {fields.map((input) => (
              <ModalInputs
                selectValue={input.value}
                label={input.label}
                key={input.name}
                inputName={input.name}
                isMulti={input.isMulti}
                inputType={input.type}
                formikMeta={formikMeta}
                formikProps={formikProps}
                onEnterCreateItemClick={onEnterCreateItemClick}
                options={input.options}
                onChangeSelectHandler={input.onChangeSelect}
              />
            ))}
          </Styled.InputsWrapper>
          <ModalButtonsBox
            isLoading={isLoading}
            onCancelClickHandler={onCloseModalWindowHandler}
            onSaveButtonCLickHandler={onSaveButtonCLickHandler}
            isSaveButton
            isNoPadding
            isDisableButton={isDisableButton}
          />
        </Styled.Form>
      </Styled.Content>
    </ReactModal>
  );
};
