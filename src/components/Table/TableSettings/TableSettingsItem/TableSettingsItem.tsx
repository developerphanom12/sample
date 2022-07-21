import React from 'react';

import { getFirstLetterUppercase, getFormattedDate } from 'services/utils';

import { Icon } from 'components/Icons/Icons';

import { TableSettingsItemStyles as Styled } from './TableSettingsItem.style';
import { useTableSettingsItemState } from './TableSettingsItem.state';

interface ITableSettingsItemProps extends TableSettingsItemProps {
  memberEmail?: string;
  memberId: string;
  memberName: string;
  memberRole: TRoles;
  createdAt: string;
  createdBy: string;
  dateFormat: string;
}
export const TableSettingsItem: React.FC<ITableSettingsItemProps> = (props) => {
  const {
    onDeleteIconClickHandler,
    onEditIconClickHandler,
    createdAt,
    createdBy,
    userRole,
    memberEmail,
    memberRole,
    memberId,
    memberName,
    dateFormat,
  } = props;

  const { onClickDeleteIconHandler, onClickEditIconHandler } =
    useTableSettingsItemState({
      itemId: memberId,
      onDeleteIconClickHandler,
      onEditIconClickHandler,
    });
  return (
    <Styled.Item>
      {(userRole === 'owner' || userRole === 'admin') && (
        <Styled.Action>
          <Styled.ActionButton onClick={onClickEditIconHandler}>
            <Icon type="edit" />
          </Styled.ActionButton>
          <Styled.ActionButton onClick={onClickDeleteIconHandler}>
            <Icon type="remove" />
          </Styled.ActionButton>
        </Styled.Action>
      )}
      <Styled.Column>
        <Styled.TextWrapper>{memberName}</Styled.TextWrapper>
      </Styled.Column>
      <Styled.Column>
        <Styled.TextWrapper>{memberEmail}</Styled.TextWrapper>
      </Styled.Column>
      <Styled.Column>{getFirstLetterUppercase(memberRole)}</Styled.Column>
      <Styled.Column>{getFormattedDate(createdAt, dateFormat)}</Styled.Column>
      <Styled.Column>{createdBy}</Styled.Column>
    </Styled.Item>
  );
};
