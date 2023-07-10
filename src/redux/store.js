import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contactsSlice';
import { filtersReducer } from './filterSlice';
import { authReducer } from './auth/slice';
import { persistStore, persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';
// delete V
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
//^^ delete

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactReducer,
    filter: filtersReducer,
  },
});

export const persistor = persistStore(store);
