import { createReducer } from '@reduxjs/toolkit';

import { initialState, adapter } from './state';
import { fetchAllTasks, authorized, unAuthorized, authorize } from './action';

export const reducer = createReducer(initialState, builder =>
  builder
    .addCase(fetchAllTasks.pending, state => {
      return { ...state, isFetching: true };
    })
    .addCase(fetchAllTasks.fulfilled, (state, action) => {
      const { tasks } = action.payload;
      return adapter.setAll({ ...state, isFetching: false }, tasks);
    })
    .addCase(fetchAllTasks.rejected, state => {
      return { ...state, isFetching: false };
    })
    .addCase(authorize, (state, action) => {
      return { ...state, isAuthorized: action.payload };
    })
    .addCase(authorized, (state, action) => {
      return { ...state, isAuthorized: action.payload };
    })
    .addCase(unAuthorized, state => {
      return { ...state, isAuthorized: false };
    })
);
