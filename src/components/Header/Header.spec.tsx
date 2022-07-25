import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { AppTheme } from 'app/theme';
import { Provider } from 'react-redux';
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom';

import { store } from 'services/redux/store';
import { Dashboard } from '../../screens/Dashboard';
import { Settings } from '../../screens/Settings';
import { Layout } from '../Layout/Layout';

import { Header } from './Header';

const setup = () => {
  render(
    <Provider store={store}>
      <AppTheme>
        <BrowserRouter>
          <Header role="admin" />
        </BrowserRouter>
      </AppTheme>
    </Provider>
  );
  const header = screen.getByText('ReceiptHub');
  return header;
};

describe('Header component', () => {
  it('Render component', () => {
    const header = setup();
    expect(header).toBeInTheDocument();
  });

  it('Render links', () => {
    setup();
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getAllByTestId('header-link')).toHaveLength(5);
  });

  // it('Navigation works', async () => {
  //   render(
  //     <MemoryRouter initialEntries={['/']}>
  //       <Routes>
  //         <Route path="/" element={<Layout />}>
  //           <Route index element={<Dashboard />} />
  //           <Route path="/settings" element={<Settings />} />
  //         </Route>
  //       </Routes>
  //     </MemoryRouter>
  //   );
  //   const user = userEvent.setup();
  //   // eslint-disable-next-line testing-library/no-debugging-utils
  //   screen.debug();
  //   const link = screen.getAllByTestId('header-link')[3];
  //   console.log(link, 'link');

  //   await user.click(link);
  //   expect(screen.getByTestId('settings-page')).toBeInTheDocument();
  //   // eslint-disable-next-line testing-library/no-debugging-utils
  //   screen.debug();
  //   // expect(screen.getByRole('navigation')).toBeInTheDocument();
  //   // expect(screen.getAllByTestId('header-link')).toHaveLength(5);
  // });
});
