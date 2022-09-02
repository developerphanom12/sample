import { add, format } from 'date-fns';
import decode from 'jwt-decode';

import { ICurrency } from 'screens/SignUp/types/signup.types';
import { IInvites } from '../screens/Invites/types/invites.types';
import { getCompanyLogo } from '../screens/Settings/settings.api';

interface IFormdataProps {
  currency?: string;
  date_format?: string;
  selectedCompanyLogo?: Blob | null;
  companyName: string;
  companyLogo: File | null;
}

const _MS_PER_DAY = 1000 * 60 * 60 * 24;

export const dateDiffInDays = (a: Date, b: Date) => {
  const expiredDate = add(b, { days: 2 });
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(
    expiredDate.getFullYear(),
    expiredDate.getMonth(),
    expiredDate.getDate()
  );

  return Math.floor((utc1 - utc2) / _MS_PER_DAY);
};

export const getFilteredMembers = (members: IMember[]) =>
  members?.filter((member) => !member.memberInvite);

export const setCompanyLogoHandler = (
  data: ICompaniesSwitcher[],
  companiesLogo?: (string | null)[]
) => {
  return data.map((item: ICompaniesSwitcher, index: number) => {
    if (companiesLogo?.length && companiesLogo[index] === null) {
      return item;
    }
    if (companiesLogo?.length && companiesLogo[index] !== null) {
      return {
        ...item,
        company: { ...item.company, logo: companiesLogo[index] },
      };
    }
    return item;
  });
};

export const getCompaniesLogoHandler = async (
  data: ICompaniesSwitcher[],
  token: string
) => {
  try {
    const promiss = data.map(async (item) => {
      if (item.company.logo) {
        const { data } = await getCompanyLogo(item.company.id, token);
        return URL.createObjectURL(data);
      } else {
        return null;
      }
    });
    const companiesLogo = await Promise.all(promiss);
    return companiesLogo;
  } catch (error) {
    console.log(error);
  }
};

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
  fieldName: 'days' | 'months',
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
  return returnDateRange(date, 'months', 1);
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

export const getCompanyInitials = (companyName: string) => {
  if (!companyName) return;
  return companyName.split('')[0].toUpperCase();
};

export const getUserRole = (accounts: IAccount[], active_account: string) => {
  if (!accounts.length || !active_account) return;
  return accounts?.find((account) => account.id === active_account);
};

export const getSelectedUser = (members: IMember[], memberId: string) => {
  if (!members.length) return;
  return members.find((member: { id: string }) => member.id === memberId);
};

export const getSelectedItems = (items: IInvites[], itemId: string) => {
  if (!items.length) return;
  return items?.find((el: { id: string }) => el.id === itemId);
};

export const onCreateFormDataHandler = (
  data: IFormdataProps,
  isUpdate?: boolean,
  isDeleteLogo?: boolean
) => {
  const formData = new FormData();
  formData.append('name', data.companyName);
  data.companyLogo?.name && formData.append('logo', data.companyLogo);
  if (isUpdate) {
    isDeleteLogo && formData.append('isDeleteLogo', 'true');
  } else {
    formData.append('currency', data.currency || '');
    formData.append('date_format', data.date_format || '');
  }
  return formData;
};

export const isTokenExpired = (token: string) => {
  if (token) {
    const decodedToken: { id: string; expiresIn: number; iat: number } =
      decode(token);
    if (decodedToken.expiresIn < new Date().getTime()) {
      return true;
    } else {
      return false;
    }
  }
};
