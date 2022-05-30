import { add, format } from 'date-fns';

import { ICurrency } from 'screens/SignUp/types/signup.types';
import { IOption } from '../components/CustomSelect/types';

export const getInitials = (name: string) => {
  let rgx = new RegExp(/(\p{L}{1})\p{L}+/, 'gu');

  let initials = [...(name.matchAll(rgx) as any)] || [];

  initials = (
    (initials.shift()?.[1] || '') + (initials.pop()?.[1] || '')
  ).toUpperCase();
  return initials;
};

export const getFormattedDate = (date: string | Date, dateFormat: string) => {
  const formattedDate = format(new Date(date), dateFormat);
  return formattedDate;
};

export const setAndFormatDateToISO = (
  selectedDate: string,
  isTommorow?: boolean
) => {
  if (!selectedDate) return;
  const currentDate = new Date(selectedDate);
  currentDate.setHours(0, 0, 0, 0);
  if (isTommorow) {
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return currentDate.toISOString();
};

export const returnDateRange = (
  date: Date,
  fieldName: 'days' | 'month',
  dateCount: number
) => {
  date.setHours(0, 0, 0, 0);
  return {
    date_start: date.toISOString(),
    date_end: add(date, {
      [fieldName]: dateCount,
    }).toISOString(),
  };
};

export const getTodayDateRange = () => returnDateRange(new Date(), 'days', 1);

export const getYesterdayDateRange = () => {
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);
  return returnDateRange(yesterday, 'days', 1);
};

export const getPrevWeekDateRange = () => {
  const date = new Date();
  date.setDate(date.getDate() - 7);
  return returnDateRange(date, 'days', 7);
};

export const getLastMonthDateRange = () => {
  const date = new Date();
  date.setDate(1);
  date.setMonth(date.getMonth() - 1);
  return returnDateRange(date, 'month', 1);
};

export const getFirstLetterUppercase = (text: string) =>
  text.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());

export const getCorrectCustomId = (text: string) => {
  if (typeof text !== 'string' || !text) return;
  return text
    .split('')
    .map((item, index) =>
      index <= 1 ? item.toUpperCase() : index === 1 ? item + ' ' : item
    )
    .map((item) => (item === 'C' ? item + ' ' : item))
    .join('');
};

export const getFormatedCurrencies = (currencies: ICurrency[]) =>
  currencies?.map((currency) => ({
    label: `${currency.value} (${currency.description})`,
    value: currency.value,
    id: currency.id,
  }));

export const getReceiptDetailsCurrentSelectItem = (
  itemsArray: IOption[],
  itemId: string
) => {
  return itemsArray.find((item) => item.id === itemId);
};

export const getFilteredItems = (list: ITabItem[], searchValue: string) => list
    ?.filter((category) =>
      category.name.toLowerCase().includes(searchValue.toLowerCase())
    ).sort((a, b) => {
      if (a.created < b.created) {
        return 1;
      }
      if (a.created > b.created) {
        return -1;
      }
      return 0;
    });

