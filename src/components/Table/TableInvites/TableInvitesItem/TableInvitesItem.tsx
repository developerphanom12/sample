import { FC } from 'react';

import { getFirstLetterUppercase, getFormattedDate } from 'services/utils';

import { Icon } from '../../../Icons';

import { TableInvitesItemStyles as Styled } from './TableInvitesItem.style';

import { DATE_FORMATS } from 'constants/strings';

interface ITableInviteItem {
  createdAt: string;
  createdBy: string;
  inviteId: string;
  creatorRole: string;
  creatorId: string;
  inviteEmail: string;
  userRole: any;
  onDeleteIconClickHandler: (itemId: string) => void;
  onEditIconClickHandler: (itemId: string) => void;
}
export const TableInvitesItem: FC<ITableInviteItem> = (props) => {
  const {
    createdAt,
    createdBy,
    creatorId,
    creatorRole,
    inviteId,
    inviteEmail,
    userRole,
    onDeleteIconClickHandler,
    onEditIconClickHandler,
  } = props;
  return (
    <Styled.Item>
      <Styled.Action>
        <Styled.ActionButton onClick={() => onEditIconClickHandler(inviteId)}>
          <Icon type="edit" />
        </Styled.ActionButton>
        <Styled.ActionButton onClick={() => onDeleteIconClickHandler(inviteId)}>
          <Icon type="remove" />
        </Styled.ActionButton>
      </Styled.Action>
      <Styled.Column>
        <Styled.ValueWrapper>{inviteEmail}</Styled.ValueWrapper>
      </Styled.Column>
      <Styled.Column>
        {getFirstLetterUppercase(creatorRole || '')}
      </Styled.Column>
      <Styled.Column>{'Active since (2 days)'}</Styled.Column>
      <Styled.Column>
        {getFormattedDate(createdAt, DATE_FORMATS[0].value)}
      </Styled.Column>
      <Styled.Column>{createdBy}</Styled.Column>
    </Styled.Item>
  );
};
