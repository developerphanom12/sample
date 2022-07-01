import React from 'react';

import { getFirstLetterUppercase } from 'services/utils';

import { Icon } from 'components/Icons/Icons';

import { TableSettingsItemStyles as Styled } from './TableSettingsItem.style';
import { useTableSettingsItemState } from './TableSettingsItem.state';

interface ITableSettingsItemProps extends TableSettingsItemProps {
  memberEmail?: string;
  memberId: string;
  memberName: string;
  memberRole: TRoles;
}
export const TableSettingsItem: React.FC<ITableSettingsItemProps> = (props) => {
  const {
    onDeleteIconClickHandler,
    onEditIconClickHandler,
    userRole,
    memberEmail,
    memberRole,
    memberId,
    memberName,
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
        <Styled.TextWrapper>Smith@gmail.com</Styled.TextWrapper>
      </Styled.Column>
      <Styled.Column>{getFirstLetterUppercase(memberRole)}</Styled.Column>
      <Styled.Column>Created On</Styled.Column>
      <Styled.Column>Created By</Styled.Column>
    </Styled.Item>
  );
};
