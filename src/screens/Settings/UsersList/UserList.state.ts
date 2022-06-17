import { useState } from 'react';
import { useFormik } from 'formik';

import { useDebounce } from 'hooks/useDebounce';
import { useToggle } from 'hooks/useToggle';

import { myAccountValidationScheme } from 'services/validation';

interface IuseUserListState {
  searchValue: string;
  isLoading: boolean;
  isContentLoading: boolean;
}

export const useUserListState = () => {
  const initialState = {
    searchValue: '',
    isLoading: false,
    isContentLoading: false,
  };

  const formikInitialValues = {
    fullName: '',
    email: '',
  };

  const [state, setState] = useState<IuseUserListState>(initialState);
  const [isModalWindowOpen, onModalWindowToggle] = useToggle();
  const [isDeleteModalWindowOpen, onDeleteModalWindowToggle] = useToggle();

  const onChangeStateFieldHandler = (
    optionName: keyof typeof initialState,
    value: string | boolean
  ) => {
    setState((prevState) => ({
      ...prevState,
      [optionName]: value,
    }));
  };

  const debouncedValue = useDebounce(state.searchValue, 250);

  const onEnterInsertUser = (event: React.KeyboardEvent) => {
    if (event.key !== 'Enter') return;
    formik.handleSubmit();
  };

  const onChangeSearchValueHandler = async (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setState((prevState) => ({
      ...prevState,
      searchValue: event.target.value,
      isContentLoading: true,
    }));
  };

  const formik = useFormik({
    initialValues: formikInitialValues,
    onSubmit: (values) => {},
    validationSchema: myAccountValidationScheme,
    validateOnBlur: true,
  });

  return {
    ...state,
    formik,
    debouncedValue,
    onModalWindowToggle,
    onDeleteModalWindowToggle,
    isModalWindowOpen,
    isDeleteModalWindowOpen,
    onChangeSearchValueHandler,
    onEnterInsertUser,
  };
};
