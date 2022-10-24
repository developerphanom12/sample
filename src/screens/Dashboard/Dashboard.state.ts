import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
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

import { setFiles } from '../FilesUploadPreview/reducer';
import { updateUserData } from '../SignUp/reducer/signup.reducer';
import { setCompanySwitcher } from '../Settings/reducer/settings.reducer';

import { getReceiptStatistic } from './dashboard.api';
import { getTimeFilterOptions } from './dashboard.constants';
import { setStatistic } from './reducer/dashboard.reducer';
import { IuseDashboardState, IUserInfoData } from './types';

import { MAX_FILE_SIZE } from 'constants/strings';

export const useDashboardState = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  const navigate = useNavigate();
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

  const initialState = {
    timeFilterValue: timeFilterOptions[0],
    isLoading: false,
    isContentLoading: false,
    isVisited: false,
  };
  const totalReceiptCount =
    Number(metric?.accepted) +
    Number(metric?.rejected) +
    Number(metric?.processing) +
    Number(metric?.review);

  const [state, setState] = useState<IuseDashboardState>(initialState);

  const onSelectFilesHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files?.length) return;
    const selectedFilesArray = Array.from(event.target.files);

    let imagesArray: { fileSrc: string; fileName: string; fileType: string }[] =
      [];

    selectedFilesArray?.forEach((file, ind) => {
      if (
        !file.type.match(/image|application\/pdf/g) ||
        file.size >= MAX_FILE_SIZE
      ) {
        selectedFilesArray.splice(ind, 1);
        return;
      }
      imagesArray.push({
        fileSrc: URL.createObjectURL(file),
        fileName: file.name,
        fileType: file.type,
      });
    });
    dispatch(
      setFiles({ filesArray: selectedFilesArray, previewFiles: imagesArray })
    );
    navigate('inbox/files-upload-preview', { state: { from: location } });
  };

  const getReceiptsStatisticHandler = async (
    timeFrames?: { date_start: string; date_end: string },
    isTimeFilter?: boolean
  ) => {
    try {
      setState((prevState) => ({
        ...prevState,
        isLoading: isTimeFilter ? false : true,
        isContentLoading: isTimeFilter ? true : false,
      }));
      const { data } = await getReceiptStatistic(timeFrames);
      const companiesWithLogo = await getCompanyLogo(data.companies, token);
      dispatch(setStatistic({ ...data, companies: companiesWithLogo }));
      if (!user.accounts?.length && !user.active_account && !company.name) {
        const { account, company } = data.companies[0];
        setUserInfo({ active_account: account.id, account, company });
      }
      setState((prevState) => ({
        ...prevState,
        isLoading: false,
        isContentLoading: false,
      }));
    } catch (error) {
      onChangeStateFieldHandler('isLoading', false);
      console.log(error);
    }
  };

  const lastReceipts = receipts?.data.slice(-5);

  const onChangeStateFieldHandler = (optionName: string, value: any) =>
    setState((prevState) => ({
      ...prevState,
      [optionName]: value,
    }));

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
    if (state.timeFilterValue.value === newValue.value) return;
    onChangeStateFieldHandler('timeFilterValue', newValue);
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
    ...state,
    onSelectFilesHandler,
    getReceiptsStatisticHandler,
    onChangeCategoryFieldHandler,
    companies,
    totalReceiptCount,
    timeFilterOptions,
    lastReceipts,
    receipts,
    company,
    user,
  };
};
