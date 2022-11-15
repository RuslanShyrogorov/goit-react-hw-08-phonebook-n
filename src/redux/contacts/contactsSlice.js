import { createSlice } from '@reduxjs/toolkit';

import {
  getContacts,
  createContact,
  deleteContact,
  updateContact,
} from './contactsOperations';

const initialContactsState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContactsState,
  extraReducers: {
    [getContacts.pending]: store => {
      store.isLoading = true;
      store.error = null;
    },
    [getContacts.fulfilled]: (store, action) => {
      store.isLoading = false;
      store.items = action.payload;
    },
    [getContacts.rejected]: (store, action) => {
      store.isLoading = false;
      store.error = action.payload;
    },

    [createContact.pending]: store => {
      store.isLoading = true;
      store.error = null;
    },
    [createContact.fulfilled]: (store, action) => {
      store.isLoading = false;
      store.items.push(action.payload);
    },
    [createContact.rejected]: (store, action) => {
      store.isLoading = false;
      store.error = action.payload;
    },

    [deleteContact.pending]: store => {
      store.isLoading = true;
      store.error = null;
    },
    [deleteContact.fulfilled]: (store, { payload }) => {
      store.isLoading = false;
      store.items = store.items.filter(item => item.id !== payload);
    },
    [deleteContact.rejected]: (store, { payload }) => {
      store.isLoading = false;
      store.error = payload;
    },

    [updateContact.pending]: store => {
      store.isLoading = true;
      store.error = null;
    },
    [updateContact.fulfilled]: (store, { payload }) => {
      store.isLoading = false;
      store.items = store.items.map(contact =>
        contact.id === payload.id ? payload : contact
      );
    },
    [updateContact.rejected]: (store, { payload }) => {
      store.isLoading = false;
      store.error = payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
