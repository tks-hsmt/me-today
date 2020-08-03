import { TrelloTask } from "../../../models";

// TODO 仮実装

const tasks: TrelloTask[] = [
  { id: '1', title: 'task1' },
  { id: '2', title: 'task2' },
  { id: '3', title: 'task3' },
  { id: '4', title: 'task4' },
  { id: '5', title: 'task5' },
  { id: '6', title: 'task6' },
  { id: '7', title: 'task7' },
  { id: '8', title: 'task8' },
  { id: '9', title: 'task9' },
  { id: '10', title: 'task10' },
  { id: '11', title: 'task11' },
  { id: '12', title: 'task12' },
  { id: '13', title: 'task13' },
  { id: '14', title: 'task14' },
  { id: '15', title: 'task15' },
  { id: '16', title: 'task16' },
];

class TrelloService {

  async fetchAll(): Promise<TrelloTask[]> {
    return tasks;
  }

  constructor(private readonly baseUrl: string) { }
}

export const trelloService = new TrelloService('');
