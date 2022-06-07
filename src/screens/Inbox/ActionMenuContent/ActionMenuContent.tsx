import { FC } from 'react';
import { CSVLink } from 'react-csv';

import { EmailModalWindow } from 'components/EmailModalWindow';

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
    </>
  );
};
