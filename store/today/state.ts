import { EntityState, createEntityAdapter } from '@reduxjs/toolkit';
import { TodayTask } from '../../models';

export const featureKey = 'today';

export interface TodayState extends EntityState<TodayTask> {
  isFetching: boolean;
  selectedId: string | null;
}

export const adapter = createEntityAdapter<TodayTask>();

export const initialState: TodayState = adapter.getInitialState({
  isFetching: false,
  selectedId: null
});
