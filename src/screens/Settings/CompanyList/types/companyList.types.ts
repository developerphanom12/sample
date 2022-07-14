export interface ISelectedCompany {
  name: string;
  logo: string | null;
  id: string;
}

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
  searchedCompanies: ICompanySettings[];
  isFetchingData: boolean;
  selectedCompany: ISelectedCompany | null;
  companyLogo: null | File;
  isCompanyLogoLoading: boolean;
  prevCompanyName: string;
  prevLogoSrc: string;
  isDeleteCompanyLogo: boolean;
}
