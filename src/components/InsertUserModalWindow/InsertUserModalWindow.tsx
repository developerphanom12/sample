import { FC } from 'react';
import { FieldInputProps, FieldMetaProps } from 'formik';
import ReactModal from 'react-modal';

import { ModalButtonsBox } from '../ModalButtonsBox';
import { ModalWindowHeader } from '../ModalWindowHeader';
import { InsertUserInputs } from './insertUserModalWindow.constants';
import { InsertUserModalWindowStyles as Styled } from './InsertUserModalWindow.style';
import { UserModalWindowStyles } from './InsertUserModalWindow.style';
import { ModalInputs } from './ModalInputs/ModalInputs';

interface InsertUserModalWindowProps
  extends Omit<
    IMasterModalWindowProps,
    'onChangeInputValueHandler' | 'inputValue'
  > {
  formikMeta: (name: string) => FieldMetaProps<string>;
  formikProps: (nameOrOptions: string) => FieldInputProps<string>;
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
        <Styled.Form>
          <Styled.InputsWrapper>
            {InsertUserInputs.map((input) => (
              <ModalInputs
                label={input.labelText}
                key={input.inputName}
                inputName={input.inputName}
                inputType={input.inputType}
                formikMeta={formikMeta}
                formikProps={formikProps}
                onEnterCreateItemClick={onEnterCreateItemClick}
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
