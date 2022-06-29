export interface IuseCompanyListState extends IPaginationState {
  searchValue: string;
  isLoading: boolean;
  isContentLoading: boolean;
  companyName: string;
  logoSrc: string;
  logoName: string;
  isSearching: boolean;
  isFocus: boolean;
  selectedItemId: string;
  searchedCompnies: ICompanySettings[];
  isFetchingData: boolean;
}
