import { EntityState, createEntityAdapter } from '@reduxjs/toolkit';
import { TrelloTask } from './../../models';

export const featureKey = 'trello';

export interface TrelloState extends EntityState<TrelloTask> {
  isFetching: boolean;
  isAuthorized: boolean;
  selectedId: string | null;
}

export const adapter = createEntityAdapter<TrelloTask>();

export const initialState: TrelloState = adapter.getInitialState({
  isFetching: false,
  isAuthorized: false,
  selectedId: null
});
