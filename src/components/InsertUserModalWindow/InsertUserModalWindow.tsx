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
}

export const InsertUserModalWindow: FC<InsertUserModalWindowProps> = (
  props
) => {
  const {
    headerText,
    isLoading,
    isModalWindowOpen,
    onCloseModalWindowHandler,
    onEnterCreateItemClick,
    onSaveButtonCLickHandler,
    isDisableButton,
    formikMeta,
    formikProps,
    modalFields,
  } = props;
  return (
    <ReactModal
      isOpen={isModalWindowOpen}
      onRequestClose={onCloseModalWindowHandler}
      ariaHideApp={false}
      style={UserModalWindowStyles}
    >
      <ModalWindowHeader
        headerTitle={headerText}
        onCloseButtonHandler={onCloseModalWindowHandler}
      />
      <Styled.Content>
        <Styled.Form onSubmit={onSaveButtonCLickHandler}>
          <Styled.InputsWrapper>
            {modalFields.map((input) => (
              <ModalInputs
                selectValue={input.value}
                label={input.label}
                key={input.name}
                inputName={input.name}
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
