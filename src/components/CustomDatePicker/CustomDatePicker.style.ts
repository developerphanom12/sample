import { styled } from 'app/theme';

export const CustomDatePickerStyles = {
  Container: styled.div`
    position: relative;
    height: 100%;
    display: flex;
    width: 100%;
  `,
  Wrapper: styled.div`
    .react-datepicker {
      position: absolute;
      top: 50px;
      right: 0;
      z-index: ${(props) => props.theme.zIndex.m};
    }

    .react-datepicker__day.react-datepicker__day--selected.react-datepicker__day--today {
      background-color: ${(props) => props.theme.colors.orange};
    }

    .react-datepicker__day--selected,
    .react-datepicker__day--in-selecting-range,
    .react-datepicker__day--in-range,
    .react-datepicker__month-text--selected,
    .react-datepicker__month-text--in-selecting-range,
    .react-datepicker__month-text--in-range,
    .react-datepicker__quarter-text--selected,
    .react-datepicker__quarter-text--in-selecting-range,
    .react-datepicker__quarter-text--in-range,
    .react-datepicker__year-text--selected,
    .react-datepicker__year-text--in-selecting-range,
    .react-datepicker__year-text--in-range {
      background-color: ${(props) => props.theme.colors.orange};
    }
    .react-datepicker__day--keyboard-selected {
      background-color: ${(props) => props.theme.colors.orange};
    }
  `,
};
