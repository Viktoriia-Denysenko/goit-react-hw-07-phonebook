import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './contactsReducer';
import { contactApi } from './contactSlice';

export const store = configureStore({
  reducer: {
    contacts: rootReducer,
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactApi.middleware,
  ],
});
