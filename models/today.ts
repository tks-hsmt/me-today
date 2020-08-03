// TODO 仮実装
export interface TodayTask {
  id: string;
  title: string;
}

export interface TodayTaskCreateDto {
  title: string;
}

export interface TodayTaskUpdateDto {
  id: string;
  title: string;
}