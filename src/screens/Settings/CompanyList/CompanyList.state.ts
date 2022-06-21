import React, { useState } from 'react';

import { useToggle } from 'hooks/useToggle';
import { useDebounce } from 'hooks/useDebounce';

import { COMPANY_LIST_INITIAL_STATE } from './companyList.constants';

interface IuseCompanyListState {
  searchValue: string;
  isLoading: boolean;
  isContentLoading: boolean;
  companyName: string;
  logoSrc: string;
  logoName: string;
  isEdit: boolean;
}

export const useCompanyListState = () => {
  const initialState = COMPANY_LIST_INITIAL_STATE;

  const [state, setState] = useState<IuseCompanyListState>(initialState);
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

  const onChangeCompanyNameHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => onChangeStateFieldHandler('companyName', event.target.value);

  const onUploadCompanyLogoHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (
      !event.target.files?.length ||
      !event.target.files[0].type.match('image')
    )
      return;
    onChangeStateFieldHandler(
      'logoSrc',
      URL.createObjectURL(event.target?.files[0])
    );
    onChangeStateFieldHandler('logoName', event.target?.files[0]?.name);
  };

  const onDeleteLogoHandler = () =>
    setState((prevState) => ({
      ...prevState,
      logoName: '',
      logoSrc: '',
    }));

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

  const onEnterInsertUser = (event: React.KeyboardEvent) => {
    if (event.key !== 'Enter') return;
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

  return {
    ...state,
    debouncedValue,
    onDeleteIconClickHandler,
    onDeleteLogoHandler,
    onChangeCompanyNameHandler,
    onModalWindowToggle,
    onDeleteModalWindowToggle,
    onUploadCompanyLogoHandler,
    isModalWindowOpen,
    isDeleteModalWindowOpen,
    onChangeSearchValueHandler,
    onEnterInsertUser,
    onEditIconClickHandler,
  };
};
