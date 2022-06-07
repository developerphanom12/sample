import { FC } from 'react';
import { FieldInputProps, FieldMetaProps } from 'formik';

import { todayDateReceiptToEmail } from 'screens/Inbox/inbox.constants';
import { emailInputs } from 'screens/Inbox/inbox.constants';

import { EmailModalFormStyles as Styled } from './EmailModalForm.style';
import { EmailInputItem } from './EmailInputsBox/EmailInputItem';

interface IEmailModalFormProps {
  formikProps: (nameOrOptions: string) => FieldInputProps<string>;
  formikMeta: (name: string) => FieldMetaProps<string>;
  checkedIds: string[];
}

export const EmailModalForm: FC<IEmailModalFormProps> = (props) => {
  const { formikProps, formikMeta, checkedIds } = props;

  return (
    <Styled.MainContentWrapper>
      {emailInputs.map((input) => (
        <>
          <Styled.Label>{input.labelText}</Styled.Label>
          <EmailInputItem
            key={input.inputName}
            inputName={input.inputName}
            labelText={input.labelText}
            isTextArea={input.isTextArea}
            inputHeight={input.inputHeight}
            formikMeta={formikMeta}
            formikProps={formikProps}
          />
        </>
      ))}
      {checkedIds.length && (
        <>
          <Styled.Label>Attachment(s)</Styled.Label>
          <Styled.AttachmentsWrapper>
            <Styled.ItemWrapper>
              <Styled.Text> {todayDateReceiptToEmail}</Styled.Text>
            </Styled.ItemWrapper>
          </Styled.AttachmentsWrapper>
        </>
      )}
    </Styled.MainContentWrapper>
  );
};
