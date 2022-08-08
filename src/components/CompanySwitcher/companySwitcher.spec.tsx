import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { AppTheme } from 'app/theme';

import { CompanySwitcher } from './CompanySwitcher';

let mockIsOpenSwitcher = false;
const mockOnClickSwitcherHandler = jest.fn();
const mockOnSwitchCompanyHandler = jest.fn();

jest.mock('../Header/Header.state', () => {
  return jest.fn(() => ({
    isOpenSwitcher: mockIsOpenSwitcher,
    onClickSwitcherHandler: mockOnClickSwitcherHandler,
    onSwitchCompanyHandler: mockOnSwitchCompanyHandler,
  }));
});

const ref = {
  current: null,
};

const companies = [
  {
    company: {
      date_format: 'dd/MM/yyyy',
      created: '10.20.2222',
      id: 'ad1',
      name: 'Company',
      logo: null,
    },
    id: '1',
    name: 'Company 1',
    role: 'role',
  },
];

const setupFunction = () => {
  const { getByTestId, queryByText, getByText } = render(
    <AppTheme>
      <CompanySwitcher
        activeAccountId={'1'}
        isOpenSwitcher={mockIsOpenSwitcher}
        onClickSwitcherHandler={mockOnClickSwitcherHandler}
        onSwitchCompanyHandler={mockOnSwitchCompanyHandler}
        switcherRef={ref}
        companies={companies}
      />
    </AppTheme>
  );
  return { getByTestId, queryByText, getByText };
};

describe('Company Switcher component', () => {
  it('render component', () => {
    const { getByTestId } = setupFunction();
    expect(getByTestId('company-switcher')).toBeInTheDocument();
  });

  it('switch menu not rendering', () => {
    const { queryByText } = setupFunction();
    expect(queryByText(/company/i)).not.toBeInTheDocument();
  });

  it('onClickSwitcherHandler works well', async () => {
    const { getByTestId } = setupFunction();
    await userEvent.click(getByTestId('company-switcher'));
    expect(mockOnClickSwitcherHandler).toBeCalled();
  });
  it('onSwitchCompanyHandler works well', async () => {
    mockIsOpenSwitcher = true;
    const { getByTestId } = setupFunction();
    await userEvent.click(getByTestId('company-switcher-menu-item'));
    expect(mockOnSwitchCompanyHandler).toBeCalledTimes(1);
  });

  it('render switcher item component', async () => {
    mockIsOpenSwitcher = true;
    const { getByTestId } = setupFunction();
    expect(getByTestId('company-switcher-menu-item')).toBeInTheDocument();
  });

  it('Switcher is open', () => {
    mockIsOpenSwitcher = true;
    const { getByTestId } = setupFunction();
    expect(getByTestId('switcher-list')).toBeInTheDocument();
  });
});
