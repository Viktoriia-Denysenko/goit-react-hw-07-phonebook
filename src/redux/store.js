import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './filterSlice';
import { contactApi } from './contactSlice';

export const store = configureStore({
  reducer: {
    [filterSlice.name]: filterSlice.reducer,
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactApi.middleware,
  ],
});
