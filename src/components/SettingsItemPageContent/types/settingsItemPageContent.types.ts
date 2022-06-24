export interface ISettingsItemPageContentProps
  extends TableSettingsProps,
    IPaginationPanel {
  onBlurHandler?: () => void;
  isGuard: boolean;
  onChangeSearchValueHandler: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  searchValue: string;
  onAddClickButtonHandler: () => void;
  onFocusSearchHandler?: () => void;
}
