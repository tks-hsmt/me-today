import { TrelloTask, Me, Card } from "../../../models";
import axios from 'axios';

// TODO 仮実装

class TrelloService {

  private readonly baseUrl: string;

  async fetchAll(): Promise<TrelloTask[]> {
    const me = await this.fetchMe();
    const url = `${this.baseUrl}/members/${me.id}/cards/open`;
    const result = await axios.get<Card[]>(url, {
      params: { key: this.key, token: this.token }
    });
    return result.data;
  }

  async fetchMe(): Promise<Me> {
    const url = `${this.baseUrl}/members/me`;
    const result = await axios.get<Me>(url, {
      params: { key: this.key, token: this.token }
    });
    return result.data;
  }

  set key(key: string) {
    if (!key) {
      localStorage.removeItem('trello.api.key');
      return;
    }
    localStorage.setItem('trello.api.key', key);
  }

  get key(): string {
    return localStorage.getItem('trello.api.key');
  }

  set token(token: string) {
    if (!token) {
      localStorage.removeItem('trello.api.token');
      return;
    }
    localStorage.setItem('trello.api.token', token);
  }

  get token(): string {
    return localStorage.getItem('trello.api.token');
  }

  get isAuthorized(): boolean {
    return (this.key && this.token) ? true : false;
  }

  constructor(domain: string, version: string) {
    this.baseUrl = `${domain}/${version}`;
  }
}

export const trelloService = new TrelloService('https://api.trello.com', '1');
