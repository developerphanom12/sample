interface IuseTableSettingsItemStateProps {
  token?: string;
  onResendInvitationHandler?: (token: string) => void;
  onDeleteIconClickHandler: (itemId: string) => void;
  onEditIconClickHandler: (itemId: string) => void;
  itemId: string;
}
export const useTableSettingsItemState = (
  props: IuseTableSettingsItemStateProps
) => {
  const {
    itemId,
    onDeleteIconClickHandler,
    onEditIconClickHandler,
    onResendInvitationHandler,
    token,
  } = props;

  const onClickDeleteIconHandler = () => onDeleteIconClickHandler(itemId);
  const onClickEditIconHandler = () => onEditIconClickHandler(itemId);
  const onClickResendInviteHandler = () =>
    onResendInvitationHandler && onResendInvitationHandler(token || '');

  return {
    onClickEditIconHandler,
    onClickDeleteIconHandler,
    onClickResendInviteHandler,
  };
};
