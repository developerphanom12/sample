import React from 'react';

import { TableSettingsStyles as Styled } from './TableSettings.style';
import { TableSettingsItem } from './TableSettingsItem/TableSettingsItem';
import { TableButton } from '../TableButton/TableButton';

export const TableSettings: React.FC<IMemberTableProps> = (props) => {
  const {
    onDeleteIconClickHandler,
    onEditIconClickHandler,
    userRole,
    members,
    searchedUsers,
    searchValue,
  } = props;
  return (
    <>
      <Styled.Head>
        {(userRole === 'owner' || userRole === 'admin') && (
          <Styled.Actions>Actions</Styled.Actions>
        )}
        <Styled.Column>
          <TableButton>Name</TableButton>
        </Styled.Column>
        <Styled.Column>
          <TableButton>Email</TableButton>
        </Styled.Column>
        <Styled.Column>
          <TableButton>Role</TableButton>
        </Styled.Column>
        <Styled.Column>
          <TableButton>Created On</TableButton>
        </Styled.Column>
        <Styled.Column>
          <TableButton>Created By</TableButton>
        </Styled.Column>
      </Styled.Head>
      {searchedUsers?.length ? (
        searchedUsers?.map((member) => (
          <TableSettingsItem
            key={member.id}
            memberId={member.id}
            memberEmail={member?.user.email}
            memberName={member.name}
            onDeleteIconClickHandler={onDeleteIconClickHandler}
            onEditIconClickHandler={onEditIconClickHandler}
            memberRole={member.role}
            userRole={userRole}
          />
        ))
      ) : searchValue && !searchedUsers?.length ? (
        <Styled.EmptyContentWrapper>
          No results found
        </Styled.EmptyContentWrapper>
      ) : (
        members?.map((member) => (
          <TableSettingsItem
            key={member.id}
            memberId={member.id}
            memberEmail={member?.user.email}
            memberName={member.name}
            onDeleteIconClickHandler={onDeleteIconClickHandler}
            onEditIconClickHandler={onEditIconClickHandler}
            memberRole={member.role}
            userRole={userRole}
          />
        ))
      )}
    </>
  );
};
