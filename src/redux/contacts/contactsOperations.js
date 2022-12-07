import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// import { instance } from 'costants/baseUrl';
// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async (_, thunkApi) => {
    try {
      // const response = await instance.get('/contacts');
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.massage);
    }
  }
);

export const createContact = createAsyncThunk(
  'contacts/createContacts',
  async (newContact, thunkApi) => {
    try {
      // const response = await instance.post('/contacts', newUser);
      const response = await axios.post('/contacts', newContact);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.massage);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      // const response = await instance.delete(`/contacts/${id}`);
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.massage);
    }
  }
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ({ id, name, number }, { rejectWithValue }) => {
    try {
      // const response = await instance.patch(`/contacts/${id}`, {
      const response = await axios.patch(`/contacts/${id}`, {
        name,
        number,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.massage);
    }
  }
);
