// TODO 仮実装
export interface TrelloTask extends Card {
}

export interface TrelloTaskCreateDto {
  title: string;
}

export interface TrelloTaskUpdateDto {
  id: string;
  title: string;
}

// Api レスポンス

/**
 * ユーザー情報
 * @description GET /1/members/me/ の結果
 */
export interface Me {
  id: string;
  username: string;
  idBoards: string[];
}

/**
 * カード情報
 * @description GET /1/members/{id}/cards/open の結果
 */
export interface Card {
  id: string;
  name: string;
  url: string;
  due: string;
}
