import { FC } from 'react';

import {
  dateDiffInDays,
  getFirstLetterUppercase,
  getFormattedDate,
  getInvitationStatus,
} from 'services/utils';

import { Icon } from '../../../Icons';

import { TableInvitesItemStyles as Styled } from './TableInvitesItem.style';

import { DATE_FORMATS } from 'constants/strings';
import { useTableInvitesItemState } from './useTableInvitesItem.state';

interface ITableInviteItem {
  createdAt: string;
  createdBy: string;
  inviteId: string;
  creatorRole: string;
  creatorId: string;
  inviteEmail: string;
  onDeleteIconClickHandler: (inviteId: string) => void;
  onEditIconClickHandler: (inviteId: string) => void;
  onResendInvitationHandler: (inviteId: string) => void;
}
export const TableInvitesItem: FC<ITableInviteItem> = (props) => {
  const {
    createdAt,
    createdBy,
    creatorId,
    onResendInvitationHandler,
    creatorRole,
    inviteId,
    inviteEmail,
    onDeleteIconClickHandler,
    onEditIconClickHandler,
  } = props;

  const {
    onClickDeleteIconHandler,
    onClickEditIconHandler,
    onClickResendInviteHandler,
  } = useTableInvitesItemState({
    inviteId,
    onDeleteIconClickHandler,
    onResendInvitationHandler,
    onEditIconClickHandler,
  });

  const diffInDays = dateDiffInDays(new Date(), new Date(createdAt));
  const invitationStatus = getInvitationStatus(diffInDays);
  const isExpired = invitationStatus === 'Resend invitation';
  return (
    <Styled.Item>
      <Styled.Action>
        <Styled.ActionButton onClick={onClickEditIconHandler}>
          <Icon type="edit" />
        </Styled.ActionButton>
        <Styled.ActionButton onClick={onClickDeleteIconHandler}>
          <Icon type="remove" />
        </Styled.ActionButton>
      </Styled.Action>
      <Styled.Column>
        <Styled.ValueWrapper>{inviteEmail}</Styled.ValueWrapper>
      </Styled.Column>
      <Styled.Column>
        {getFirstLetterUppercase(creatorRole || '')}
      </Styled.Column>
      <Styled.Column>
        {isExpired ? (
          <Styled.TextWrapper
            isExpired={isExpired}
            onClick={onClickResendInviteHandler}
          >
            Resend invitation
          </Styled.TextWrapper>
        ) : (
          <Styled.TextWrapper>{invitationStatus}</Styled.TextWrapper>
        )}
      </Styled.Column>
      <Styled.Column>
        {getFormattedDate(createdAt, DATE_FORMATS[0].value)}
      </Styled.Column>
      <Styled.Column>{createdBy}</Styled.Column>
    </Styled.Item>
  );
};
