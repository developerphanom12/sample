import { styled } from 'app/theme';

export const CustomDatePickerStyles = {
  Container: styled.div`
    position: relative;
    height: 100%;
    display: flex;
    width: 100%;
  `,
  Wrapper: styled.div<{ isInputDate?: boolean; isFormattedDate?: boolean }>`
    .react-datepicker {
      font-family: ${(props) => props.theme.font.openSans};
      font-size: ${(props) => props.theme.size.default};
      color: ${(props) => props.theme.colors.black};
      position: absolute;
      top: ${({ isFormattedDate }) => (isFormattedDate ? '45px' : '40px')};
      right: 0;
      z-index: ${(props) => props.theme.zIndex.m};
      @media (min-width: 1300px) {
        display: ${(props) => props.isInputDate && 'flex'};
        align-items: ${(props) => props.isInputDate && 'center'};
        justify-content: ${(props) => props.isInputDate && 'center'};
        width: ${(props) => props.isInputDate && '100%'};
      }
    }

    .react-datepicker__header {
      background-color: ${(props) => props.theme.colors.lightGray};
      @media (min-width: 1300px) {
        display: ${(props) => props.isInputDate && 'flex'};
        align-items: ${(props) => props.isInputDate && 'center'};
        justify-content: ${(props) => props.isInputDate && 'center'};
        width: ${(props) => props.isInputDate && '100%'};
        flex-wrap: ${(props) => props.isInputDate && 'wrap'};
      }
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
