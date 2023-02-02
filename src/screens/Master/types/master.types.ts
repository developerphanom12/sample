export interface IuseMasterState {
  isEdit?: boolean;
  searchValue: string;
  modalInputValue: string;
  prevInputValue: string;
  isLoading: boolean;
  isEmptyData?: boolean;
  isFetchingData?: boolean;
  isContentLoading?: boolean;
  isFocus?: boolean;
  isHeaderPanel?: boolean;
  searchedItems: ITabItem[];
  isSearching: boolean;
  selected?: number;
}

export interface IHeaderPanelMasterProps {
  isButton?: boolean;
  isGuard?: boolean;
  userRole?: TRoles;
  buttonText: string;
  onChangeSearchValueHandler: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  searchValue: string;
  onAddClickButtonHandler: () => void;
  onBlurHandler?: () => void;
  onFocusSearchHandler?: () => void;
}

export interface TableMasterProps {
  categories: ITabItem[];
  dateFormat: string;
  tabName: string;
  onDeleteIconClickHandler: (itemId: string) => Promise<void>;
  onEditIconClickHandler: (itemId: string) => Promise<void>;
  searchedItems: ITabItem[];
  searchValue: string;
  userRole: TRoles;
}

export interface ITabContentProps
  extends TableMasterProps,
    Omit<IHeaderPanelMasterProps, 'isButton' | 'buttonText' | 'userRole'>,
    IPaginationPanel {
  isFetchingData?: boolean;
  isFocus?: boolean;
  isContentLoading?: boolean;
  searchedItems: ITabItem[];
}

export interface ICreateCategory {
  name: string;
  active_account?: string | null;
}

export interface IUpdateCategory extends ICreateCategory {
  id: string;
}

export interface IMASTER_INITIAL_STATE {
  categories: { data: ITabItem[]; count: number | null };
  supplierAccounts: { data: ITabItem[]; count: number | null };
  types: { data: ITabItem[]; count: number | null };
  activeTabName: string;
  selectedCategory: ITabItem | null;
}
