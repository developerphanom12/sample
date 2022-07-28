import {
  setCompanies,
  setCompanySwitcher,
  setIsSwitchCompany,
  SettingsReducer,
  SETTINGS_INITIAL_STATE,
} from './settings.reducer';

const mockedCompanies = [
  {
    date_format: 'dd/MM/yyyy',
    id: 'avc1',
    created: '07.07.27',
    members: [],
    name: 'Company',
    logo: null,
  },
];

const mockedSwitcher = [
  {
    company: mockedCompanies[0],
    id: 'adc213',
    name: 'User',
    role: 'owner',
  },
];
describe('Settings reducer', () => {
  it('setIsSwitchCompany works well', () => {
    expect(
      SettingsReducer(SETTINGS_INITIAL_STATE, setIsSwitchCompany(true))
    ).toEqual({ ...SETTINGS_INITIAL_STATE, isSwitchCompany: true });
  });

  it('setCompanies works well', () => {
    expect(
      SettingsReducer(
        SETTINGS_INITIAL_STATE,
        setCompanies({
          count: mockedCompanies.length,
          companies: mockedCompanies,
        })
      )
    ).toEqual({
      ...SETTINGS_INITIAL_STATE,
      companies: { count: 1, companies: mockedCompanies },
      isFetchingData: true,
    });
  });

  it('setCompanySwitcher works well', () => {
    expect(
      SettingsReducer(
        SETTINGS_INITIAL_STATE,
        setCompanySwitcher(mockedSwitcher)
      )
    ).toEqual({
      ...SETTINGS_INITIAL_STATE,
      companySwitcher: mockedSwitcher,
      isFetchingData: false,
    });
  });
});
