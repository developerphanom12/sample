import { SingleValue } from 'react-select';

import { IOption } from 'components/CustomSelect/types';

export interface IuseMasterState {
  isEdit?: boolean;
  searchValue: string;
  modalInputValue: string;
  prevInputValue: string;
  isLoading: boolean;
  itemsPerPage: SingleValue<IOption> | any;
  skipReceipts: number;
  currentPage: number;
  inputPaginationValue: string;
  pages: number;
  forwardDisabled: boolean;
  backwardDisabled: boolean;
  isEmptyData?: boolean;
  isFetchingData?: boolean;
  isContentLoading?: boolean;
  isFocus?: boolean;
  isHeaderPanel?: boolean;
  searchedItems: ITabItem[];
  isSearching: boolean;
}

export interface IHeaderPanelMasterProps {
  isGuard?: boolean;
  userRole?: TRoles;
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
}

export interface ITabContentProps
  extends TableMasterProps,
    IHeaderPanelMasterProps,
    IPaginationPanel {
  isFetchingData?: boolean;
  isFocus?: boolean;
  isContentLoading?: boolean;
  searchedItems: ITabItem[];
}

export interface ICreateCategory {
  name: string;
}

export interface IUpdateCategory extends ICreateCategory {
  id: string;
}

export interface IMASTER_INITIAL_STATE {
  categories: { data: ITabItem[]; count: number | null };
  suppliers: { data: ITabItem[]; count: number | null };
  types: { data: ITabItem[]; count: number | null };
  activeTabName: string;
  selectedCategory: ITabItem | null;
}

export interface IMasterParams {
  search?: string;
  take?: number;
  skip?: number;
}
