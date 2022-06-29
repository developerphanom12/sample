export interface ICompanySettings {
  date_format: string;
  id: string;
  name: string;
}

export interface ISETTINGS_INITIAL_STATE {
  companyMembers: { members: IMember[]; count: number | null };
  companies: ICompanySettings[];
}
