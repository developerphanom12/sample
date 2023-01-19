import { FC } from 'react';

import { HeaderPanelMaster } from 'components/HeaderPanelMaster';
import { LoaderComponent } from 'components/Loader';
import { PaginationPanel } from 'components/PaginationPanel';
import { TableMaster } from 'components/Table/TableMaster';

import { CategoryContentStyles as Styled } from '../../CategoriesTab/CategoryContent/CategoryContent.style';
import { ITabContentProps } from '../../types/master.types';

export const CategoryContent: FC<ITabContentProps> = (props) => {
  const {
    categories,
    dateFormat,
    onAddClickButtonHandler,
    onChangeSearchValueHandler,
    onDeleteIconClickHandler,
    onEditIconClickHandler,
    searchValue,
    tabName,
    onBlurHandler,
    onFocusSearchHandler,
    currentPage,
    inputPaginationValue,
    onBackwardClick,
    onChangeInputValue,
    onChangeReceiptsPerPage,
    onForwardClick,
    onGoToClick,
    onEnterGoToClick,
    pages,
    receiptsPerPage,
    onChangePage,
    isContentLoading,
    searchedItems,
  } = props;

  return (
    <Styled.ContentWrapper>
      <HeaderPanelMaster
        isButton
        onChangeSearchValueHandler={onChangeSearchValueHandler}
        searchValue={searchValue}
        onAddClickButtonHandler={onAddClickButtonHandler}
        onBlurHandler={onBlurHandler}
        onFocusSearchHandler={onFocusSearchHandler}
        buttonText="Create Category"
      />
      {isContentLoading ? (
        <Styled.LoaderWrapper>
          <LoaderComponent theme="preview" />
        </Styled.LoaderWrapper>
      ) : (
        <Styled.TableWrapper>
          <TableMaster
            tabName={tabName}
            categories={categories}
            searchedItems={searchedItems}
            dateFormat={dateFormat}
            onDeleteIconClickHandler={onDeleteIconClickHandler}
            onEditIconClickHandler={onEditIconClickHandler}
            searchValue={searchValue}
          />
          {(searchValue && searchedItems?.length) ||
          (!searchValue && categories.length) ? (
            <PaginationPanel
              pages={pages}
              currentPage={currentPage}
              onChangeReceiptsPerPage={onChangeReceiptsPerPage}
              onChangeInputValue={onChangeInputValue}
              inputPaginationValue={inputPaginationValue}
              receiptsPerPage={receiptsPerPage}
              onChangePage={onChangePage}
              onEnterGoToClick={onEnterGoToClick}
              onGoToClick={onGoToClick}
              onForwardClick={onForwardClick}
              onBackwardClick={onBackwardClick}
            />
          ) : null}
        </Styled.TableWrapper>
      )}
    </Styled.ContentWrapper>
  );
};
