import { render, screen, fireEvent } from '@testing-library/react';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { AppTheme } from 'app/theme';
import { store } from 'services/redux/store';

import { useLinkListState } from './LinkList.state';
import { LinksList } from './LinksList';

import { ROUTES } from 'constants/routes';

jest.mock('./LinkList.state');
const onClick = jest.fn();
const useMockLinkListState = useLinkListState as jest.MockedFunction<
  typeof useLinkListState
>;
const links = [
  { title: 'My Account', route: ROUTES.settings, onClick: onClick },
  { title: 'Companies', route: ROUTES.companiesList },
];

const renderComponentFc = () =>
  render(
    <Provider store={store}>
      <AppTheme>
        <BrowserRouter>
          <LinksList />
        </BrowserRouter>
      </AppTheme>
    </Provider>
  );

describe('Link list component', () => {
  it('Render component', () => {
    useMockLinkListState.mockReturnValue(links);
    renderComponentFc();
    expect(screen.getByTestId('links')).toBeInTheDocument();
    expect(screen.getByTestId('links')).toHaveTextContent('My Account');
    expect(screen.getAllByTestId('link-item')).toHaveLength(2);
  });

  it('Links not rendering', () => {
    useMockLinkListState.mockReturnValue([]);
    renderComponentFc();
    expect(screen.getByTestId('links')).toBeInTheDocument();
    expect(screen.queryByTestId('link-item')).not.toBeInTheDocument();
    expect(screen.queryAllByTestId('link-item')).toHaveLength(0);
  });

  it('Onclick works', () => {
    useMockLinkListState.mockReturnValue(links);
    renderComponentFc();
    const link = screen.getAllByTestId('link-item')[0];
    expect(link).toBeInTheDocument();
    fireEvent.click(link);
    expect(onClick).toBeCalled();
  });
});
