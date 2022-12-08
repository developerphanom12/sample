import { FC } from 'react';

import { getFirstLetterUppercase, getFormattedDate } from 'services/utils';

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

  const isHideEditButton =
    memberRole === 'owner' ? true : userRole?.role !== 'owner' && false;
  const isHideDeleteButton =
    memberRole === 'owner' ||
    (memberRole === userRole?.role && userRole.id === memberId);

  const invitationStatus = !memberInvitation ? 'Active' : 'Resend invitation';

  return (
    <Styled.Item>
      {userRole?.role === 'user' ? null : (
        <Styled.Action>
          {isHideEditButton ? null : (
            <Styled.ActionButton onClick={onClickEditIconHandler}>
              <Icon type="edit" />
            </Styled.ActionButton>
          )}
          {isHideDeleteButton ? null : (
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
        {invitationStatus === 'Resend invitation' ? (
          <Styled.TextWrapper
            isExpired={true}
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
