import { useState } from 'react';

interface IuseCustomDatePickerState {
  currentDate: Date;
  isOpen: boolean;
}

export const useCustomDatePickerState = () => {
  const initialState = {
    currentDate: new Date(),
    isOpen: false,
  };
  const [state, setState] = useState<IuseCustomDatePickerState>(initialState);
  const onChangeDate = (date: Date) => {
    setState((prevState) => ({
      ...prevState,
      currentDate: date,
      isOpen: !prevState.isOpen,
    }));
  };
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setState((prevState) => ({ ...prevState, isOpen: !prevState.isOpen }));
  };
  return {
    ...state,
    onChangeDate,
    handleClick,
  };
};
