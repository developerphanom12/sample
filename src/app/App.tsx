import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persisterStore } from '../services/redux/store';
import { Theme } from './theme';

const App = () => {
  return (
    // <Provider store={store}>
    //   <PersistGate loading={null} persistor={persisterStore}>
    <Theme>
      <div>App hello world</div>
    </Theme>
    //   </PersistGate>
    // </Provider>
  );
};
export default App;
