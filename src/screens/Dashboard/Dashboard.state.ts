import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { ActionMeta } from 'react-select';

import { getUserCompanies } from 'components/Header/header.api';

import { IState } from 'services/redux/reducer';
import {
  getLastMonthDateRange,
  getPrevWeekDateRange,
  getTodayDateRange,
  getYesterdayDateRange,
} from 'services/utils';
import { useGetCompanyLogo } from 'hooks/useGetCompanyLogo';
import { useSelectFiles } from 'hooks/useSelectFiles';

import { updateUserData } from '../SignUp/reducer/signup.reducer';
import { setCompanySwitcher } from '../Settings/reducer/settings.reducer';

import { getReceiptStatistic } from './dashboard.api';
import { getTimeFilterOptions } from './dashboard.constants';
import { setStatistic } from './reducer/dashboard.reducer';
import { ITimeFIlterValue, IUserInfoData } from './types';

export const useDashboardState = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const getCompanyLogo = useGetCompanyLogo();

  const {
    dashboard: { metric, receipts, companies },
    user: {
      userInfo: { company },
      user,
      token,
    },
    settings: { companySwitcher },
  } = useSelector((state: IState) => state);

  const timeFilterOptions = getTimeFilterOptions();

  const totalReceiptCount =
    Number(metric?.accepted) +
    Number(metric?.rejected) +
    Number(metric?.processing) +
    Number(metric?.review);

  const [timeFilterValue, setTimeFilterValue] = useState<ITimeFIlterValue>(
    timeFilterOptions[0]
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isContentLoading, setIsContentLoading] = useState(false);

  const onSelectFiles = useSelectFiles();

  const onSelectFilesHandler = (event: React.ChangeEvent<HTMLInputElement>) =>
    onSelectFiles({
      files: event.target.files,
      location,
      route: 'inbox/files-upload-preview',
    });

  const getReceiptsStatisticHandler = async (
    timeFrames?: { date_start: string; date_end: string },
    isTimeFilter?: boolean
  ) => {
    try {
      if (isTimeFilter) {
        setIsContentLoading(true);
      } else {
        setIsLoading(true);
      }

      const { data } = await getReceiptStatistic(timeFrames);
      const companiesWithLogo = await getCompanyLogo(data.companies, token);
      dispatch(setStatistic({ ...data, companies: companiesWithLogo }));
      if (!user.accounts?.length && !user.active_account && !company.name) {
        const { account, company } = data.companies[0];
        setUserInfo({ active_account: account.id, account, company });
      }

      if (isTimeFilter) {
        setIsContentLoading(false);
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      setIsContentLoading(false);
      setIsLoading(false);
      console.log(error);
    }
  };

  const lastReceipts = receipts?.data.slice(-5);

  const dateHashMapping: Record<
    string,
    { date_start: string; date_end: string }
  > = {
    Today: getTodayDateRange(),
    Yesterday: getYesterdayDateRange(),
    'Last Week': getPrevWeekDateRange(),
    'Last Month': getLastMonthDateRange(),
  };

  const onChangeCategoryFieldHandler = (
    newValue: any,
    actionMeta: ActionMeta<unknown>
  ) => {
    if (timeFilterValue.value === newValue.value) return;
    setTimeFilterValue(newValue);
    getReceiptsStatisticHandler(dateHashMapping[newValue.value], true);
  };

  const setUserInfo = async (userData: IUserInfoData) => {
    try {
      if (!companySwitcher.length) {
        const { data } = await getUserCompanies();
        dispatch(setCompanySwitcher(data || []));
      }
      const { company, active_account, account } = userData;
      dispatch(updateUserData({ company, account, active_account }));
    } catch (err) {
      console.log(err);
    }
  };

  return {
    timeFilterValue,
    onSelectFilesHandler,
    getReceiptsStatisticHandler,
    onChangeCategoryFieldHandler,
    isLoading,
    isContentLoading,
    companies,
    totalReceiptCount,
    timeFilterOptions,
    lastReceipts,
    receipts,
    company,
    user,
  };
};
