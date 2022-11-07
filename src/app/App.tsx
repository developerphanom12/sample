import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { GoogleOAuthProvider } from '@react-oauth/google';

import { persisterStore, store } from 'services/redux/store';
import { injectStore } from 'services/api-service';

import { AppRouter } from './app.router';
import { AppTheme } from '../styles/theme';

const App = () => {
  injectStore(store);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persisterStore}>
        <AppTheme>
          <GoogleOAuthProvider
            clientId={
              '810424004818-44j1gg53tj3pajdqqvm06aio8s30gjdn.apps.googleusercontent.com'
            }
          >
            <AppRouter />
          </GoogleOAuthProvider>
        </AppTheme>
      </PersistGate>
    </Provider>
  );
};
export default App;
