import React from 'react';

import { Pagination } from 'components/Pagination';
import { CustomSelect } from 'components/CustomSelect';

import { PaginationPanelStyles as Styled } from './PaginationPanel.style';

import { PAGINATION_ARRAY } from 'constants/pagination-array';

export const PaginationPanel: React.FC<IPaginationPanel> = (props) => {
  const {
    currentPage,
    inputPaginationValue,
    onBackwardClick,
    onChangeInputValue,
    onChangeReceiptsPerPage,
    onForwardClick,
    onEnterGoToClick,
    onGoToClick,
    pages,
    onChangePage,
    receiptsPerPage,
  } = props;
  return (
    <Styled.Wrapper>
      <Styled.SelectorWrapper>
        <CustomSelect
          height="45"
          paginate
          options={PAGINATION_ARRAY}
          onChangeValueHandler={onChangeReceiptsPerPage}
          value={receiptsPerPage}
          marginBottom="0"
        />
      </Styled.SelectorWrapper>
      <Styled.PagesWrapper>
        <Pagination
          onChangeInputValue={onChangeInputValue}
          onEnterGoToClick={onEnterGoToClick}
          onGoToClick={onGoToClick}
          inputPaginationValue={inputPaginationValue}
          onChangePage={onChangePage}
          onForwardClick={onForwardClick}
          onBackwardClick={onBackwardClick}
          currentPage={currentPage}
          pages={pages}
        />
      </Styled.PagesWrapper>
    </Styled.Wrapper>
  );
};
