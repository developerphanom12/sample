import { AnyAction, combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {
  signUpUserReducer,
  SIGN_UP_USER_INITIAL_STATE,
} from 'screens/SignUp/reducer/signup.reducer';
import { ISIGN_UP_USER_INITIAL_STATE } from 'screens/SignUp/types/signup.types';
import { capiumLoginReducer } from 'screens/CapiumLogin/reducer/capiumLogin.reducer';
import { ICAPIUM_LOGIN_ACCOUNT_INITIAL_STATE } from 'screens/CapiumLogin/types/capiumLogin.types';
import {
  filesUploadReducer,
  FILES_UPLOAD_PREVIEW_INITIAL_STATE,
} from 'screens/FilesUploadPreview/reducer/filesUploadPreview.reducer';
import { IFILES_UPLOAD_PREVIEW_INITIAL_STATE } from 'screens/FilesUploadPreview/types/filesUploadPreview.types';
import {
  inboxReducer,
  INBOX_INITIAL_STATE,
} from 'screens/Inbox/reducer/inbox.reducer';
import { IINBOX_INITIAL_STATE } from 'screens/Inbox/types/inbox.types';
import { IDASHBOARD_INITIAL_STATE } from 'screens/Dashboard/types';
import {
  dashboardReducer,
  DASHBOARD_INITIAL_STATE,
} from 'screens/Dashboard/reducer/dashboard.reducer';
import { IMASTER_INITIAL_STATE } from 'screens/Master/types/master.types';
import {
  MasterReducer,
  MASTER_INITIAL_STATE,
} from 'screens/Master/reducer/master.reducer';
import { IRECEIPT_DETAILS_INITIAL_STATE } from 'screens/ReceiptDetails/types/receiptDetails.types';
import {
  ReceiptDetailsReducer,
  RECEIPT_DETAILS_INITIAL_STATE,
} from 'screens/ReceiptDetails/reducer/receiptDetails.reducer';

export const persistConfig = {
  key: 'root',
  storage,
  whitelist: [
    'user',
    'capiumLoginAccount',
    'filesUpload',
    'inbox',
    'dashboard',
    'receiptDetails',
    'master',
  ],
};

export interface IState {
  user: ISIGN_UP_USER_INITIAL_STATE;
  capiumLoginAccount: ICAPIUM_LOGIN_ACCOUNT_INITIAL_STATE;
  filesUpload: IFILES_UPLOAD_PREVIEW_INITIAL_STATE;
  inbox: IINBOX_INITIAL_STATE;
  dashboard: IDASHBOARD_INITIAL_STATE;
  master: IMASTER_INITIAL_STATE;
  receiptDetails: IRECEIPT_DETAILS_INITIAL_STATE;
}

const combineReducer = combineReducers<IState>({
  user: signUpUserReducer,
  capiumLoginAccount: capiumLoginReducer,
  filesUpload: filesUploadReducer,
  inbox: inboxReducer,
  dashboard: dashboardReducer,
  master: MasterReducer,
  receiptDetails: ReceiptDetailsReducer,
});

export type combineReducerType = ReturnType<typeof combineReducer>;

const reducer = (state: combineReducerType | undefined, action: AnyAction) => {
  if (action.type === 'LOGOUT') {
    if (state) {
      state = {
        ...state,
        user: SIGN_UP_USER_INITIAL_STATE,
        dashboard: DASHBOARD_INITIAL_STATE,
        master: MASTER_INITIAL_STATE,
        inbox: INBOX_INITIAL_STATE,
        filesUpload: FILES_UPLOAD_PREVIEW_INITIAL_STATE,
        receiptDetails: RECEIPT_DETAILS_INITIAL_STATE,
      };
    }
  }
  return combineReducer(state, action);
};

export const rootReducer = persistReducer(persistConfig, reducer);
