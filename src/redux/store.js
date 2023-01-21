import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactSlice } from './contactSlice';

const persistConfig = {
  key: 'root',
  storage,
}

const contactReducer = persistReducer(persistConfig, contactSlice.reducer);

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
    middleware(getDefaultMiddleware) {
      return getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      });
    },
});

export const persistor = persistStore(store)