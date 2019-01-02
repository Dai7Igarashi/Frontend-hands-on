export interface User {
  id: number;
  name: string;
  avatar: string;
}

export enum Actions {
  JOINED = 0,
  LEFT = 1,
}

export enum Events {
  CONNECT = "connect",
  DISCONNECT = "disconnect",
}

export interface NewMessage {
  from?: User;
  content?: any;
  action?: Actions;
}

export interface Message extends NewMessage {
  id: number;
}