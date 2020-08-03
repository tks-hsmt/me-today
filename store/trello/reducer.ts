import { createReducer } from '@reduxjs/toolkit';

import { initialState, adapter } from './state';
import { fetchAllTasks } from './action';

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
);
