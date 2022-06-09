import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { ActionMeta } from 'react-select';

import { IState } from 'services/redux/reducer';
import {
  getLastMonthDateRange,
  getPrevWeekDateRange,
  getTodayDateRange,
  getYesterdayDateRange,
} from 'services/utils';

import { setFiles } from '../FilesUploadPreview/reducer';
import { getReceiptStatistic } from './dashboard.api';
import { getTimeFilterOptions } from './dashboard.constants';
import { setStatistic } from './reducer/dashboard.reducer';

interface IuseDashboardState {
  timeFilterValue: {
    value: string;
    label: string;
  };
  isLoading: boolean;
  isContentLoading: boolean;
  isVisited: boolean;
}

export const useDashboardState = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  const navigate = useNavigate();

  const {
    dashboard: { metric, receipts },
    user: {
      userInfo: { company },
      user,
    },
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

    let imagesArray: { fileSrc: string; fileName: string }[] = [];

    selectedFilesArray?.forEach((file) => {
      if (!file.type.match('image')) {
        return;
      }
      imagesArray.push({
        fileSrc: URL.createObjectURL(file),
        fileName: file.name,
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
      dispatch(setStatistic(data));
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

  return {
    ...state,
    onSelectFilesHandler,
    getReceiptsStatisticHandler,
    onChangeCategoryFieldHandler,
    totalReceiptCount,
    timeFilterOptions,
    lastReceipts,
    receipts,
    company,
    user,
  };
};
