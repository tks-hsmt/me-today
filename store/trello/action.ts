import { createAsyncThunk } from '@reduxjs/toolkit';
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