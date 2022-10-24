import { render } from '@testing-library/react';

import { AppTheme } from 'styles/theme';
import { Provider } from 'react-redux';
import { store } from 'services/redux/store';

import { DocumentMetric } from './DocumentMetric';
import { useDocumentMetricItemItemListState } from './DocumentMetricItemList/documentMetricItemItemList.state';

const companies = [
  {
    account: { id: 'adc1', name: 'Test User', role: 'Owner' },
    company_owner: { id: 'gt13', name: 'Test User', role: 'Owner' },
    company: {
      currency: {
        country: 'United Kingdom',
        description: 'GPB',
        id: 'asdfr',
        value: 'UK',
      },
      date_format: 'dd/MM/yyyy',
      created: '10.20.2222',
      id: 'dcbg2',
      name: 'Test Company',
      logo: null,
    },
  },
];
const mockedProps = {
  userName: 'Test User',
  companies,
};
const mockedMetrics = [
  {
    metric: 'processing',
    title: 'Processing',
    count: 0,
  },
  {
    metric: 'review',
    title: 'Review',
    count: 1,
  },
  {
    metric: 'accepted',
    title: 'Accepted',
    count: 0,
  },
  {
    metric: 'rejected',
    title: 'Rejected',
    count: 1,
  },
];

jest.mock('./DocumentMetricItemList/documentMetricItemItemList.state');
const useMockedDocumentMetricItemItemListState =
  useDocumentMetricItemItemListState as jest.MockedFunction<
    typeof useDocumentMetricItemItemListState
  >;

const setupFunction = () => {
  useMockedDocumentMetricItemItemListState.mockReturnValue(
    mockedMetrics as any[]
  );
  const { getByTestId, getAllByTestId, getByText, getByRole, getAllByRole } =
    render(
      <Provider store={store}>
        <AppTheme>
          <DocumentMetric {...mockedProps} />
        </AppTheme>
      </Provider>
    );
  return { getByTestId, getAllByTestId, getByText, getByRole, getAllByRole };
};

describe('Document metric component', () => {
  it('Render component', () => {
    const { getByText } = setupFunction();
    expect(getByText(/receipt metric/i)).toBeInTheDocument();
  });

  it('Render companies', () => {
    const { getAllByTestId } = setupFunction();
    expect(getAllByTestId('company-item')).toHaveLength(1);
  });

  it('Render metrics', () => {
    const { getAllByTestId } = setupFunction();
    expect(getAllByTestId('metric-item')).toHaveLength(4);
  });
});
