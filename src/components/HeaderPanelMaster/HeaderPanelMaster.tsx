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
            placeHolder="Search here..."
          />
          <Styled.IconWrapper>
            <Icon type="searchIcon" />
          </Styled.IconWrapper>
        </Styled.SearchInputWrapper>
      </Styled.SearchWrapper>
      <Styled.ButtonWrapper>
        <Button
          onClick={onAddClickButtonHandler}
          themedButton="primary"
          width="primary"
        >
          Add
        </Button>
      </Styled.ButtonWrapper>
    </Styled.HeaderPanelWrapper>
  );
};
