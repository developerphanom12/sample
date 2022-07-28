import { currencies, mockedCompany, mockedState } from '../SignUp.constants';
import {
  signUpUserReducer,
  SIGN_UP_USER_INITIAL_STATE,
  setCompany,
  setUser,
  setUserAvatar,
  setCurrencies,
} from './signup.reducer';

describe('Signup reducer', () => {
  it('setUser works well', () => {
    expect(
      signUpUserReducer(SIGN_UP_USER_INITIAL_STATE, setUser(mockedState))
    ).toEqual(mockedState);
  });

  it('setUserAvatar works well', () => {
    expect(
      signUpUserReducer(SIGN_UP_USER_INITIAL_STATE, setUserAvatar('avatar.png'))
    ).toEqual({
      ...SIGN_UP_USER_INITIAL_STATE,
      user: { ...SIGN_UP_USER_INITIAL_STATE.user, profile_image: 'avatar.png' },
    });
  });

  it('setCurrencies works well', () => {
    expect(
      signUpUserReducer(SIGN_UP_USER_INITIAL_STATE, setCurrencies(currencies))
    ).toEqual({
      ...SIGN_UP_USER_INITIAL_STATE,
      currencies,
    });
  });

  it('setCompany works well', () => {
    expect(
      signUpUserReducer(SIGN_UP_USER_INITIAL_STATE, setCompany(mockedCompany))
    ).toEqual({
      ...SIGN_UP_USER_INITIAL_STATE,
      userInfo: {
        company: mockedCompany,
      },
    });
  });
});
