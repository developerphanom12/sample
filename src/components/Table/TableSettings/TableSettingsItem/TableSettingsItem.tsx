import { FC } from 'react';
import { isToday } from 'date-fns';

import {
  dateDiffInDays,
  getFirstLetterUppercase,
  getFormattedDate,
} from 'services/utils';

import { Icon } from 'components/Icons/Icons';

import { TableSettingsItemStyles as Styled } from './TableSettingsItem.style';
import { useTableSettingsItemState } from './TableSettingsItem.state';

interface ITableSettingsItemProps extends TableSettingsItemProps {
  onResendInvitationHandler?: (token: string) => void;
  memberEmail?: string;
  companyName?: string;
  memberInvitation: IMemberInvite | null;
  createdBy?: string;
  memberId: string;
  memberName: string;
  memberRole: TRoles;
  createdAt: string;
  dateFormat: string;
}
export const TableSettingsItem: FC<ITableSettingsItemProps> = (props) => {
  const {
    onDeleteIconClickHandler,
    onEditIconClickHandler,
    onResendInvitationHandler,
    createdAt,
    createdBy,
    userRole,
    memberEmail,
    memberRole,
    memberId,
    memberName,
    dateFormat,
    companyName,
    memberInvitation,
  } = props;

  const {
    onClickDeleteIconHandler,
    onClickEditIconHandler,
    onClickResendInviteHandler,
  } = useTableSettingsItemState({
    itemId: memberId,
    onDeleteIconClickHandler,
    onEditIconClickHandler,
    onResendInvitationHandler,
    invitationId: memberInvitation?.id,
  });

  const isNotDeleteButton = userRole === 'owner' && memberRole === 'owner';

  const isTodayDate =
    memberInvitation && isToday(new Date(memberInvitation?.created));

  const diffInDays =
    memberInvitation &&
    dateDiffInDays(new Date(), new Date(memberInvitation?.created));

  const invitationStatus = !memberInvitation
    ? 'Accepted'
    : isTodayDate || (diffInDays && diffInDays >= 1) || diffInDays === 0
    ? 'Resend invitation'
    : diffInDays && diffInDays === -1
    ? 'Active since (1 day)'
    : diffInDays && diffInDays === -2
    ? 'Active since (2 days)'
    : 'Waiting for approval';

  const isExpired = invitationStatus === 'Resend invitation';

  return (
    <Styled.Item>
      {(userRole === 'owner' || userRole === 'admin') && (
        <Styled.Action>
          <Styled.ActionButton onClick={onClickEditIconHandler}>
            <Icon type="edit" />
          </Styled.ActionButton>
          {isNotDeleteButton ? null : (
            <Styled.ActionButton onClick={onClickDeleteIconHandler}>
              <Icon type="remove" />
            </Styled.ActionButton>
          )}
        </Styled.Action>
      )}
      <Styled.Column>
        <Styled.TextWrapper>{memberName}</Styled.TextWrapper>
      </Styled.Column>
      <Styled.Column>
        <Styled.TextWrapper>
          {memberInvitation ? memberInvitation.email : memberEmail}
        </Styled.TextWrapper>
      </Styled.Column>
      <Styled.Column>{getFirstLetterUppercase(memberRole)}</Styled.Column>
      <Styled.Column>
        <Styled.TextWrapper>{companyName}</Styled.TextWrapper>
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
      <Styled.Column>{getFormattedDate(createdAt, dateFormat)}</Styled.Column>
      <Styled.Column>{createdBy}</Styled.Column>
    </Styled.Item>
  );
};
