export interface ICreateUser {
  email: string;
  password: string;
  fullName: string;
  country: string;
}

export interface IUser extends ICreateUser {
  id: string;
}

export interface ISocialAccount {
  capiumEmail: string;
  capiumId: string;
  id: string;
}

export interface ISIGN_UP_USER_INITIAL_STATE {
  user: IUser;
  token: string;
  socialAccount: ISocialAccount;
}
