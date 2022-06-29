export interface ISettingsItemPageContentProps
  extends TableSettingsProps,
    IPaginationPanel {
  companies?: ICompanySettings[];
  members?: IMember[];
  isFocus?: boolean;
  searchedUsers?: IMember[];
  isMemeberList?: boolean;
  isContentLoading?: boolean;
  onBlurHandler?: () => void;
  isGuard: boolean;
  onChangeSearchValueHandler: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  searchValue: string;
  onAddClickButtonHandler: () => void;
  onFocusSearchHandler?: () => void;
  isFetchingData: boolean;
}
