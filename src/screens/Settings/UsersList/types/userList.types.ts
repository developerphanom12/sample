export interface IuseUserListState extends IPaginationState {
  searchValue: string;
  isLoading: boolean;
  isContentLoading: boolean;
  isSearching: boolean;
  selectedItemId: string;
  isFocus: boolean;
  searchedUsers: IMember[];
  role: IOption | null;
  prevRole: IOption | null;
  company: IOption | null;
  isFetchingData: boolean;
  selectedUserName: string;
}
export interface IgetInputFieldsProps {
  options: IOption[][];
  funcArray: ((newValue: IOption, actionMeta: unknown) => void)[];
  state: {
    company: IOption | null;
    role: IOption | null;
  };
}
