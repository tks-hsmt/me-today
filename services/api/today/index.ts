import { TodayTask } from "../../../models";

// TODO 仮実装

const tasks: TodayTask[] = [
  { id: '1', title: 'today task1' },
  { id: '2', title: 'today task2' },
];

class TodayService {

  async fetchAll(): Promise<TodayTask[]> {
    return tasks;
  }

  constructor(private readonly baseUrl: string) { }
}

export const todayService = new TodayService('');
