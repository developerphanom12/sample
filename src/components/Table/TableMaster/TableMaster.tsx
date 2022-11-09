import React, { memo } from 'react';

import { MasterItem } from 'screens/Master/MasterItem';
import { TableMasterProps } from 'screens/Master/types/master.types';

import { TableButton } from '../TableButton/TableButton';
import { TableMasterStyles as Styled } from './TableMaster.style';

export const TableMaster: React.FC<TableMasterProps> = memo((props) => {
  const {
    categories,
    dateFormat,
    tabName,
    onDeleteIconClickHandler,
    onEditIconClickHandler,
    searchValue,
    searchedItems,
  } = props;

  return (
    <>
      <Styled.Head>
        <Styled.Actions>Actions</Styled.Actions>
        <Styled.Column width="200">
          <TableButton>{tabName}</TableButton>
        </Styled.Column>
        <Styled.Column>
          <TableButton>Created On</TableButton>
        </Styled.Column>
        <Styled.Column width="200">
          <TableButton>Created By</TableButton>
        </Styled.Column>
      </Styled.Head>
      {searchedItems?.length && searchValue ? (
        searchedItems?.map((category) => (
          <MasterItem
            key={category.id}
            categoryId={category.id}
            categoryName={category.name}
            createdDate={category.created}
            categoryCreator={category.creator.name}
            dateFormat={dateFormat}
            onDeleteIconClickHandler={onDeleteIconClickHandler}
            onEditIconClickHandler={onEditIconClickHandler}
          />
        ))
      ) : searchValue && !searchedItems?.length ? (
        <Styled.EmptyContentWrapper>
          No results found
        </Styled.EmptyContentWrapper>
      ) : (
        categories?.map((category) => (
          <MasterItem
            key={category.id}
            categoryId={category.id}
            categoryName={category.name}
            createdDate={category.created}
            categoryCreator={category.creator.name}
            dateFormat={dateFormat}
            onDeleteIconClickHandler={onDeleteIconClickHandler}
            onEditIconClickHandler={onEditIconClickHandler}
          />
        ))
      )}
    </>
  );
});
