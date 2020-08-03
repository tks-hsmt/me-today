// TODO 仮実装
export interface TrelloTask {
  id: string;
  title: string;
}

export interface TrelloTaskCreateDto {
  title: string;
}

export interface TrelloTaskUpdateDto {
  id: string;
  title: string;
}