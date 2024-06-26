import { FC, useState } from 'react';
import ReactModal from 'react-modal';
import Select, { SingleValue } from 'react-select';

import { Input } from '../Input';
import { ModalButtonsBox } from '../ModalButtonsBox';
import { ModalWindowHeader } from '../ModalWindowHeader';
import {
  MasterModalWindowStyles as Styled,
  MasterModalStyles,
} from './MasterModalWindow.style';

export const MasterExpenseModalWindow: FC<IMasterExpenseModalWindowProps> = (props) => {
  const {
    isModalWindowOpen,
    headerText,
    isLoading,
    isDisableButton,
    inputValue,
    dateValue,
    reportName,
    onCloseModalWindowHandler,
    onSaveButtonCLickHandler,
    onEnterCreateItemClick,
    onChangeInputValueHandler,
    onChangeExpenseDateValueHandler,
    onChangeExpenseNameValueHandler
  } = props;

  const [isNewReport, setIsNewReport] = useState(true);
  const [selectedReport, setSelectedReport] = useState<SingleValue<IOption> | null>(null);

  const handleReportTypeChange = (isNew: boolean) => {
    setIsNewReport(isNew);
  };

  interface IOption {
    value: string;
    label: string;
  }

  const existingReports = [
    { value: 'report1', label: 'Purchases report for bill' },
    { value: 'report2', label: 'Travel expenses' },
    { value: 'report3', label: 'Office supplies' },
  ];

  const handleSelectChange = (selectedOption: SingleValue<IOption> | null) => {
    setSelectedReport(selectedOption);
  };

  return (
    <ReactModal
      isOpen={isModalWindowOpen}
      onRequestClose={onCloseModalWindowHandler}
      ariaHideApp={false}
      style={MasterModalStyles}
    >
      <ModalWindowHeader headerTitle={headerText} />
      <Styled.MainContentWrapper>
        <Styled.RadioGroup>
          <Styled.RadioLabel isChecked={!isNewReport}>
            <Styled.RadioButton
              type="radio"
              checked={!isNewReport}
              onChange={() => handleReportTypeChange(false)}
            />
            Existing Report
          </Styled.RadioLabel>
          <Styled.RadioLabel isChecked={isNewReport}>
            <Styled.RadioButton
              type="radio"
              checked={isNewReport}
              onChange={() => handleReportTypeChange(true)}
            />
            New Report
          </Styled.RadioLabel>
        </Styled.RadioGroup>
        <div style={{marginTop:"20px"}}>
        {isNewReport ? (
          <>
            <Input
              onChangeValue={onChangeInputValueHandler}
              value={inputValue}
              text="Report For"
              onKeyDown={onEnterCreateItemClick}
              isRemoveBorder
            />
            <Input
              onChangeValue={onChangeExpenseDateValueHandler}
              value={dateValue}
              text="Report Date"
              onKeyDown={onEnterCreateItemClick}
              isRemoveBorder
              inputType="date"
            />
            <Input
              onChangeValue={onChangeExpenseNameValueHandler}
              value={reportName}
              text="Report Name"
              onKeyDown={onEnterCreateItemClick}
              isRemoveBorder
            />
          </>
        ) : (
          <>
            <Styled.Label>Report name</Styled.Label>
            <Select
              options={existingReports}
              onChange={handleSelectChange}
              value={selectedReport}
              placeholder="Select a report"
            />
          </>
        )}
        </div>
      </Styled.MainContentWrapper>
      <ModalButtonsBox
        isLoading={isLoading}
        onCancelClickHandler={onCloseModalWindowHandler}
        onSaveButtonCLickHandler={onSaveButtonCLickHandler}
        isSaveButton
        isDisableButton={isDisableButton}
      />
    </ReactModal>
  );
};
