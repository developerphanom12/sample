import { FC } from 'react';

import { IHeaderPanelMasterProps } from 'screens/Master/types/master.types';

import { Button } from '../Button';
import { Icon } from '../Icons/Icons';
import { Input } from '../Input';
import { HeaderPanelStyles as Styled } from './HeaderPanelMaster.style';

export const HeaderPanelMaster: FC<IHeaderPanelMasterProps> = (props) => {
  const {
    onChangeSearchValueHandler,
    searchValue,
    onAddClickButtonHandler,
    onBlurHandler,
    onFocusSearchHandler,
    isGuard,
    userRole,
    isButton,
    buttonText,
  } = props;
  return (
    <Styled.HeaderPanelWrapper>
      <Styled.SearchWrapper>
        <Styled.SearchInputWrapper>
          <Input
            value={searchValue}
            onChangeValue={onChangeSearchValueHandler}
            onBlur={onBlurHandler}
            onFocus={onFocusSearchHandler}
            isHiddenLabel
            isNoMargin
            inputTheme="search"
            placeHolder="Search"
          />
          <Styled.IconWrapper>
            <Icon type="smallSearchIcon" />
          </Styled.IconWrapper>
        </Styled.SearchInputWrapper>
      </Styled.SearchWrapper>
      {(isGuard && userRole?.role === 'admin') ||
      (isGuard && userRole?.role === 'owner') ||
      (isGuard && userRole?.role === 'accountant') ||
      isButton ? (
        <Styled.ButtonWrapper>
          <Button
            onClick={onAddClickButtonHandler}
            themedButton="primary"
            width="primary"
          >
            {buttonText}
          </Button>
        </Styled.ButtonWrapper>
      ) : null}
    </Styled.HeaderPanelWrapper>
  );
};
