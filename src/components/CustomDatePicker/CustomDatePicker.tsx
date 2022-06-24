import { FC, RefObject } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import { CustomDatePickerStyles as Styled } from './CustomDatePicker.style';
import { DateButton } from './DateButton';

interface ICustomDatePicker {
  onChange?: (date: Date) => void;
  onDatePickerClickHandler?: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  isDatePickerOpen?: boolean;
  selectedDate?: Date | null;
  onClickOutsideDatePickerHandler?: (
    event: React.MouseEvent<HTMLDivElement>
  ) => void;
  datePickerRef?: RefObject<HTMLButtonElement>;
  isInputDate: boolean;
  formattedDate: string;
}

export const CustomDatePicker: FC<ICustomDatePicker> = (props) => {
  const {
    isInputDate,
    selectedDate,
    isDatePickerOpen,
    formattedDate,
    datePickerRef,
    onDatePickerClickHandler,
    onClickOutsideDatePickerHandler,
    onChange,
  } = props;

  const onChangeDateHandler = (date: Date) => {
    onChange && onChange(date);
  };

  const dateLabelCondition =
    !formattedDate && isInputDate
      ? ''
      : formattedDate
      ? `${formattedDate}`
      : 'Choose Date';

  return (
    <Styled.Container>
      <DateButton
        datePickerRef={datePickerRef}
        onClick={onDatePickerClickHandler}
        isInputDate={isInputDate}
      >
        {dateLabelCondition}
      </DateButton>
      {isDatePickerOpen && (
        <Styled.Wrapper
          isFormattedDate={!!dateLabelCondition}
          isInputDate={isInputDate}
        >
          <DatePicker
            onClickOutside={onClickOutsideDatePickerHandler}
            selected={selectedDate}
            onChange={onChangeDateHandler}
            allowSameDay
            inline
          />
        </Styled.Wrapper>
      )}
    </Styled.Container>
  );
};
