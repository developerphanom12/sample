import { FC } from 'react';

import { IInvites } from 'screens/Invites/types/invites.types';

import { TableButton } from '../TableButton/TableButton';
import { TableInvitesStyles as Styled } from './TableInvites.style';
import { TableInvitesItem } from './TableInvitesItem';

interface ITableInvites {
  userRole?: IAccount;
  onResendInvitationHandler: (inviteId: string) => void;
  searchValue: string;
  searchedInvites: IInvites[];
  invites: IInvites[];
  onDeleteIconClickHandler: (itemId: string) => void;
  onEditIconClickHandler: (itemId: string) => void;
}
export const TableInvites: FC<ITableInvites> = (props) => {
  const {
    invites,
    onDeleteIconClickHandler,
    onEditIconClickHandler,
    onResendInvitationHandler,
    searchValue,
    searchedInvites,
    userRole,
  } = props;
  return (
    <>
      <Styled.Head>
        <Styled.Actions>Actions</Styled.Actions>
        <Styled.Column>
          <TableButton>Email</TableButton>
        </Styled.Column>
        <Styled.Column>
          <TableButton>Your role in company</TableButton>
        </Styled.Column>
        <Styled.Column>
          <TableButton>Status</TableButton>
        </Styled.Column>
        <Styled.Column>
          <TableButton>Created On</TableButton>
        </Styled.Column>
        <Styled.Column>
          <TableButton>Created By</TableButton>
        </Styled.Column>
      </Styled.Head>
      {searchedInvites?.length && searchValue ? (
        searchedInvites?.map((invite) => (
          <TableInvitesItem
            key={invite.id}
            inviteId={invite.id}
            createdAt={invite.created}
            createdBy={invite?.members[0]?.name}
            creatorRole={invite?.members[0]?.role}
            creatorId={invite?.members[0]?.id}
            inviteEmail={invite.email}
            userRole={userRole}
            onDeleteIconClickHandler={onDeleteIconClickHandler}
            onEditIconClickHandler={onEditIconClickHandler}
          />
        ))
      ) : searchValue && !searchedInvites?.length ? (
        <Styled.EmptyContentWrapper>
          No results found
        </Styled.EmptyContentWrapper>
      ) : (
        invites?.map((invite) => (
          <TableInvitesItem
            key={invite.id}
            inviteId={invite.id}
            createdAt={invite.created}
            createdBy={invite?.members[0]?.name}
            creatorRole={invite?.members[0]?.role}
            creatorId={invite?.members[0]?.id}
            inviteEmail={invite.email}
            userRole={userRole}
            onDeleteIconClickHandler={onDeleteIconClickHandler}
            onEditIconClickHandler={onEditIconClickHandler}
          />
        ))
      )}
    </>
  );
};
