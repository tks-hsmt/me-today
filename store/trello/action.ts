import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import { trelloService } from './../../services';

// TODO 仮実装
export const fetchAllTasks = createAsyncThunk(
  'trello/fetchAll',
  async (arg: { offset?: number; limit?: number }) => {
    const { offset, limit } = arg;
    const result = await trelloService.fetchAll();
    return { tasks: result };
  }
);

export const authorize = createAction('trello/authorize', (arg: { key?: string }) => {
  trelloService.key = arg.key || trelloService.key;
  return { payload: trelloService.isAuthorized };
});

export const authorized = createAction('trello/authorized', (arg: { token: string }) => {
  trelloService.token = arg.token || trelloService.token;
  return { payload: trelloService.isAuthorized };
});

export const unAuthorized = createAction('trello/unAuthorized');
