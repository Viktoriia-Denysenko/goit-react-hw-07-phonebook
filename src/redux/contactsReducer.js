import { createSlice, combineReducers } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    add: (state, { payload }) => [payload, ...state],
    remove: (state, { payload }) =>
      state.filter(contact => contact.id !== payload),
  },
});

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filtrate: (_, { payload }) => payload,
  },
});

export const rootReducer = combineReducers({
  [contactsSlice.name]: contactsSlice.reducer,
  [filterSlice.name]: filterSlice.reducer,
});

export const { add, remove } = contactsSlice.actions;
export const { filtrate } = filterSlice.actions;

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
