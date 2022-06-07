import { persistStore } from 'redux-persist';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { rootReducer } from './reducer';

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

const persisterStore = persistStore(store);
export { persisterStore, store };
export type RootState = ReturnType<typeof store.getState>;
export type TypeStore = typeof store;
