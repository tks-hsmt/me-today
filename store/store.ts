import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';

import * as trello from './trello';
import * as today from './today';

/**
 * Reducer
 */
const reducer = combineReducers({
  [trello.featureKey]: trello.reducer,
  [today.featureKey]: today.reducer
});

/**
 * MIddleware
 */
const middleware = getDefaultMiddleware({
  thunk: true,
  immutableCheck: true,
  serializableCheck: true
});

/**
 * Store
 */
export const store = configureStore({
  reducer,
  middleware,
  devTools: true
});

/**
 * Types
 */
export type State = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch;
