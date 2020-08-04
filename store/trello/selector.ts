import { createSelector } from '@reduxjs/toolkit';
import { TrelloState, adapter, featureKey } from './state';

const { selectAll, selectEntities } = adapter.getSelectors();

const featureStateSelector = (state: { [featureKey]: TrelloState }) => state[featureKey];

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

export const trelloTasksSelector = createSelector(
  featureStateSelector,
  selectAll
);

export const trelloTaskSelector = createSelector(
  entitiesSelector,
  selectedIdSelector,
  (entities, id) => (id ? entities[id] || null : null)
);

export const isAuthorizedSelector = createSelector(
  featureStateSelector,
  state => state.isAuthorized
);
