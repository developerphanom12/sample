import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { persisterStore, store } from 'services/redux/store';

import { AppRouter } from './app.router';
import { AppTheme } from './theme';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persisterStore}>
        <AppTheme>
          <AppRouter />
        </AppTheme>
      </PersistGate>
    </Provider>
  );
};
export default App;
