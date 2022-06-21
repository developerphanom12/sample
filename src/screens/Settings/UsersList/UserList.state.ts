import { useState } from 'react';
import { useFormik } from 'formik';

import { useDebounce } from 'hooks/useDebounce';
import { useToggle } from 'hooks/useToggle';
import { myAccountValidationScheme } from 'services/validation';

import { USERS_LIST_INITIAL_STATE } from './userList.constants';

interface IuseUserListState {
  searchValue: string;
  isLoading: boolean;
  isContentLoading: boolean;
}

export const useUserListState = () => {
  const initialState = USERS_LIST_INITIAL_STATE

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

  const onDeleteIconClickHandler = async (itemId: string) => {
    try {
      onDeleteModalWindowToggle();
    } catch (error) {
      console.log(error);
    }
  };

  const onEditIconClickHandler = async (itemId: string) => {
    try {
      onModalWindowToggle();
      setState((prevState) => ({
        ...prevState,
        isEdit: true,
      }));
    } catch (error) {
      console.log(error);
      setState((prevState) => ({
        ...prevState,
        isEdit: false,
      }));
    }
  };

  return {
    ...state,
    formik,
    debouncedValue,
    onEditIconClickHandler,
    onDeleteIconClickHandler,
    onModalWindowToggle,
    onDeleteModalWindowToggle,
    isModalWindowOpen,
    isDeleteModalWindowOpen,
    onChangeSearchValueHandler,
    onEnterInsertUser,
  };
};
