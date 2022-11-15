import { createAsyncThunk } from '@reduxjs/toolkit';

import { instance } from 'costants/baseUrl';

export const signup = createAsyncThunk(
  'auth/signup',
  async (data, { rejectWithValue }) => {
    try {
      const result = await instance.post('/users/signup', data);
      return result;
    } catch (error) {
      return rejectWithValue(error.massage);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      const result = await instance.post('/users/login', data);
      return result;
    } catch (error) {
      return rejectWithValue(error.massage);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (data, { rejectWithValue }) => {
    try {
      const result = await instance.post('/users/logout', data);
      return result;
    } catch (error) {
      return rejectWithValue(error.massage);
    }
  }
);

export const current = createAsyncThunk(
  'auth/current',
  async (data, { rejectWithValue }) => {
    try {
      const result = await instance.post('/users/current', data);
      return result;
    } catch (error) {
      return rejectWithValue(error.massage);
    }
  }
);
