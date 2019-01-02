import * as socketIo from 'socket.io-client';
import { NewMessage, Message } from '../model';

const SERVER_URL = "http://localhost:8080";

let idCounter = 0;

type OnMessageCallback = (message: Message) => void;

class WebSocket {
  private socket: SocketIOClient.Socket;

  constructor() {
    // connect to launched server.
    this.socket = socketIo(SERVER_URL);
  }

  public sendNewMessage(msg: NewMessage): void {
    // server catch this at socket.on('client-to-server')
    this.socket.emit('client-to-server', msg);
  }

  public getMessage(onMessageCallback: OnMessageCallback) {
    this.socket.on('server-to-client', (msg: NewMessage) => {
      const message: Message = {
        id: ++idCounter,
        ...msg,
      };
      onMessageCallback(message);
    });
  }
}

export default WebSocket;
