import { createSlice } from '@reduxjs/toolkit';

import {
  getContacts,
  createContact,
  deleteContact,
  updateContact,
} from './contactsOperations';

const initialContactsState = {
  items: [],
  // items: [
  //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  // ],
  isLoading: false,
  error: null,
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContactsState,
  extraReducers: builder =>
    builder
      .addCase(getContacts.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(getContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(createContact.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
      })
      .addCase(createContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteContact.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = state.items.filter(item => item.id !== payload.id);
      })
      .addCase(deleteContact.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(updateContact.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = state.items.map(contact =>
          contact.id === payload.id ? payload : contact
        );
      })
      .addCase(updateContact.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      }),
});

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: initialContactsState,
//   extraReducers: {
//     [getContacts.pending]: store => {
//       store.isLoading = true;
//       store.error = null;
//     },
//     [getContacts.fulfilled]: (store, action) => {
//       store.isLoading = false;
//       store.items = action.payload;
//     },
//     [getContacts.rejected]: (store, action) => {
//       store.isLoading = false;
//       store.error = action.payload;
//     },

//     [createContact.pending]: store => {
//       store.isLoading = true;
//       store.error = null;
//     },
//     [createContact.fulfilled]: (store, action) => {
//       store.isLoading = false;
//       store.items.push(action.payload);
//     },
//     [createContact.rejected]: (store, action) => {
//       store.isLoading = false;
//       store.error = action.payload;
//     },

//     [deleteContact.pending]: store => {
//       store.isLoading = true;
//       store.error = null;
//     },
//     [deleteContact.fulfilled]: (store, { payload }) => {
//       store.isLoading = false;
//       store.items = store.items.filter(item => item.id !== payload);
//     },
//     [deleteContact.rejected]: (store, { payload }) => {
//       store.isLoading = false;
//       store.error = payload;
//     },

//     [updateContact.pending]: store => {
//       store.isLoading = true;
//       store.error = null;
//     },
//     [updateContact.fulfilled]: (store, { payload }) => {
//       store.isLoading = false;
//       store.items = store.items.map(contact =>
//         contact.id === payload.id ? payload : contact
//       );
//     },
//     [updateContact.rejected]: (store, { payload }) => {
//       store.isLoading = false;
//       store.error = payload;
//     },
//   },
// });

export const contactsReducer = contactsSlice.reducer;
