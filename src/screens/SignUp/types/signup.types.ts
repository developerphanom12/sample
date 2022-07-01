export interface ICreateUser {
  email: string;
  password: string;
  fullName: string;
  country: string;
}
export interface ICompany {
  date_format: string;
  currency: ICurrency;
  id: string;
  name: string;
}

export interface IUser extends ICreateUser {
  socialAuth?: null;
  id: string;
  active_account: string | null;
  accounts: IAccount[] | null;
}

export interface ISocialAccount {
  capiumEmail: string;
  capiumId: string;
  id: string;
}

export interface ICurrency {
  country: string;
  description: string;
  id: string;
  value: string;
}

export interface IUserInfo {
  account: IAccount;
  company: ICompany;
}

export interface ISIGN_UP_USER_INITIAL_STATE {
  user: IUser;
  token: string;
  socialAccount: ISocialAccount;
  userInfo: IUserInfo;
  currencies: ICurrency[];
}

export interface IUpdateUserProfile {
  company: Pick<ICompany, 'currency' | 'date_format'>;
  user: Pick<IUser, 'email' | 'country' | 'fullName'>;
}
