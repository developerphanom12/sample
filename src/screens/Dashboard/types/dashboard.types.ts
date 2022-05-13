import { IReceipt } from '../../Inbox/types/inbox.types';

export interface IMetric {
  accepted: number | null;
  rejected: number | null;
  processing: number | null;
  review: number | null;
}

export interface IAccountCompanyOwner {
  id: string;
  name: string;
  role: string;
}

export interface ICompany {
  id: string;
  date_format: string;
  name: string;
}

export interface ICompany {
  account: IAccountCompanyOwner;
  company_owner: IAccountCompanyOwner;
  company: ICompany;
}

export interface IReceipts {
  count: number;
  data: IReceipt[];
}

export interface IDASHBOARD_INITIAL_STATE {
  companies: ICompany[];
  metric: IMetric;
  receipts: IReceipts | null;
}
