import { unwrapResult } from '@reduxjs/toolkit';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../store';
import { isFetchingSelector, todayTasksSelector, todayTaskSelector } from './selector';
import { fetchAllTasks } from './action';
import { TodayTask } from '../../models';

export const useTodayStore = () => {
  const dispatch: AppDispatch = useDispatch();
  const isFetching = useSelector(isFetchingSelector);
  const tasks: TodayTask[] = useSelector(todayTasksSelector);
  const task: TodayTask = useSelector(todayTaskSelector);

  const fetchAll = useCallback((arg: { offset?: number; limit?: number } = {}) => dispatch(fetchAllTasks(arg)).then(unwrapResult), [dispatch]);

  return {
    isFetching,
    tasks,
    task,
    fetchAll,
  } as const;
};
