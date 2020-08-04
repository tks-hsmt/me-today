import { unwrapResult } from '@reduxjs/toolkit';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../store';
import { isFetchingSelector, trelloTasksSelector, trelloTaskSelector, isAuthorizedSelector } from './selector';
import { fetchAllTasks, authorize, authorized } from './action';
import { TrelloTask } from '../../models';

export const useTrelloStore = () => {
  const dispatch: AppDispatch = useDispatch();
  const isFetching = useSelector(isFetchingSelector);
  const isAuthorized = useSelector(isAuthorizedSelector);
  const tasks: TrelloTask[] = useSelector(trelloTasksSelector);
  const task: TrelloTask = useSelector(trelloTaskSelector);

  const fetchAll = useCallback((arg: { offset?: number; limit?: number } = {}) => dispatch(fetchAllTasks(arg)).then(unwrapResult), [dispatch]);

  const setKey = (key: string) => dispatch(authorize({ key }));

  const setToken = (token: string) => dispatch(authorized({ token }));

  const init = () => dispatch(authorize({}));

  return {
    isFetching,
    isAuthorized,
    tasks,
    task,
    init,
    fetchAll,
    setKey,
    setToken
  } as const;
};
