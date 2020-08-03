import { createAsyncThunk } from '@reduxjs/toolkit';
import { todayService } from '../../services';

// TODO 仮実装
export const fetchAllTasks = createAsyncThunk(
  'today/fetchAll',
  async (arg: { offset?: number; limit?: number }) => {
    const { offset, limit } = arg;
    const result = await todayService.fetchAll();
    return { tasks: result };
  }
);
