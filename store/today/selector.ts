import { createSelector } from '@reduxjs/toolkit';
import { TodayState, adapter, featureKey } from './state';

const { selectAll, selectEntities } = adapter.getSelectors();

const featureStateSelector = (state: { [featureKey]: TodayState }) => state[featureKey];

const entitiesSelector = createSelector(
  featureStateSelector,
  selectEntities
);

export const isFetchingSelector = createSelector(
  featureStateSelector,
  state => state.isFetching
);

export const selectedIdSelector = createSelector(
  featureStateSelector,
  state => state.selectedId
);

export const todayTasksSelector = createSelector(
  featureStateSelector,
  selectAll
);

export const todayTaskSelector = createSelector(
  entitiesSelector,
  selectedIdSelector,
  (entities, id) => (id ? entities[id] || null : null)
);
