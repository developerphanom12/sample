import React from 'react';

import { TableSettingsStyles as Styled } from './TableSettings.style';
import { TableSettingsCompanyItem } from './TableSettingsItem/TableSettingsCompanyItem';
import { TableButton } from '../TableButton/TableButton';

export const TableSettingsCompany: React.FC<TableSettingsProps> = (props) => {
  const {
    onDeleteIconClickHandler,
    onEditIconClickHandler,
    userRole,
    companies,
  } = props;
  return (
    <>
      <Styled.Head>
        {(userRole === 'owner' || userRole === 'admin') && (
          <Styled.Actions>Actions</Styled.Actions>
        )}
        <Styled.Column>
          <TableButton>Company</TableButton>
        </Styled.Column>
        <Styled.Column>
          <TableButton>Created On</TableButton>
        </Styled.Column>
        <Styled.Column>
          <TableButton>Created By</TableButton>
        </Styled.Column>
      </Styled.Head>
      {companies?.map((company) => (
        <TableSettingsCompanyItem
          isCompanyTable
          key={company.id}
          companyName={company.name}
          userRole={userRole}
          onDeleteIconClickHandler={onDeleteIconClickHandler}
          onEditIconClickHandler={onEditIconClickHandler}
        />
      ))}
    </>
  );
};
