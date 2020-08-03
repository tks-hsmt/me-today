import { unwrapResult } from '@reduxjs/toolkit';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../store';
import { isFetchingSelector, trelloTasksSelector, trelloTaskSelector } from './selector';
import { fetchAllTasks } from './action';
import { TrelloTask } from '../../models';

export const useTrelloStore = () => {
  const dispatch: AppDispatch = useDispatch();
  const isFetching = useSelector(isFetchingSelector);
  const tasks: TrelloTask[] = useSelector(trelloTasksSelector);
  const task: TrelloTask = useSelector(trelloTaskSelector);

  const fetchAll = useCallback((arg: { offset?: number; limit?: number } = {}) => dispatch(fetchAllTasks(arg)).then(unwrapResult), [dispatch]);

  return {
    isFetching,
    tasks,
    task,
    fetchAll,
  } as const;
};
