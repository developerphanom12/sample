interface IuseTableSettingsItemStateProps {
  onDeleteIconClickHandler: (itemId: string) => Promise<void>;
  onEditIconClickHandler: (itemId: string) => Promise<void>;
  itemId: string;
}
export const useTableSettingsItemState = (
  props: IuseTableSettingsItemStateProps
) => {
  const { itemId, onDeleteIconClickHandler, onEditIconClickHandler } = props;

  const onClickDeleteIconHandler = () => onDeleteIconClickHandler(itemId);
  const onClickEditIconHandler = () => onEditIconClickHandler(itemId);
  
  return { onClickEditIconHandler, onClickDeleteIconHandler };
};
