export interface ISETTINGS_INITIAL_STATE {
  companyMembers: { members: IMember[]; count: number | null };
  companies: ICompanySettings[];
  companySwitcher: ICompaniesSwitcher[];
}
