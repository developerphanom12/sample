import { FC } from 'react';
import { CSVLink } from 'react-csv';

import { EmailModalWindow } from 'components/EmailModalWindow';
import { SuccessPopup } from 'components/SuccessPopup';

import { ActionMenuContentStyles as Styled } from './ActionMenuContent.style';

interface IActionMenuContentProps extends IEmailModalWindowProps {
  csvLink: React.RefObject<
    CSVLink &
      HTMLAnchorElement & {
        link: HTMLAnchorElement;
      }
  >;
  csvData: string;
  excelRef: React.RefObject<HTMLAnchorElement>;
  excelUrl: string;
  isSentSuccessPopup: boolean;
}

export const ActionMenuContent: FC<IActionMenuContentProps> = (props) => {
  const {
    checkedIds,
    formikMeta,
    formikProps,
    isModalWindowOpen,
    isValid,
    isLoading,
    onCloseModalWindowHandler,
    onFormHandleSubmit,
    csvLink,
    csvData,
    excelRef,
    excelUrl,
    isSentSuccessPopup,
  } = props;
  return (
    <>
      <Styled.CSVLinkWrapper>
        <CSVLink
          data={csvData}
          filename="receipt.csv"
          ref={csvLink}
          target="_blank"
        />
      </Styled.CSVLinkWrapper>
      <EmailModalWindow
        isModalWindowOpen={isModalWindowOpen}
        onCloseModalWindowHandler={onCloseModalWindowHandler}
        formikMeta={formikMeta}
        formikProps={formikProps}
        onFormHandleSubmit={onFormHandleSubmit}
        checkedIds={checkedIds}
        isValid={isValid}
        isLoading={isLoading}
      />
      <Styled.ExcelLink href={excelUrl} ref={excelRef} />
      {isSentSuccessPopup && (
        <Styled.SuccessPopupWrapper>
          <SuccessPopup titleText="Email sent successfully" />
        </Styled.SuccessPopupWrapper>
      )}
    </>
  );
};
