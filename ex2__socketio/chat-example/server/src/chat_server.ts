import { createServer, Server } from 'http';
import * as express from 'express';
import * as socketIo from 'socket.io';

import { Message } from './model/index';

export class ChatServer {
  public static readonly PORT: number = 8080;
  private app: express.Application;
  private server: Server;
  private io: SocketIO.Server;
  private port: string | number;  // union type.

  constructor() {
    this.createApp();
    this.createServer();
    this.config();
    this.sockets();
    this.listen();
  }

  private createApp(): void {
    this.app = express();
  }

  private createServer(): void {
    this.server = createServer(this.app);
  }

  private config(): void {
    // If process.env.PORT=number, type of process.env.PORT is number.
    // But default, type of process.evn.PORT is string.
    this.port = process.env.PORT || ChatServer.PORT
  }

  private sockets(): void {
    this.io = socketIo(this.server);
  }

  private listen(): void {
    this.server.listen(this.port, () => {
      console.log(`Running server on port${this.port}`);
    });

    /**
     * If first accessed HOST:PORT, 'io' is called.
     * Once connected, action from client can catch by 'socket'.
     * And io.emit enable us to send action from server to client.
     */

    // connect is default action.
    this.io.on('connect', (socket: any) => {
      console.log(`Connected client on port ${this.port}`);
      // client-to-server is called in client 'io.emit'.
      socket.on('client-to-server', (msg: Message) => {
        console.log(`[server](message): ${JSON.stringify(msg)}`);
        // send message to client.
        this.io.emit('server-to-client', msg);
      });

      // disconnect is default action.
      socket.on('disconnect', () => {
        console.log("Client disconnected");
      });
    });
  }

  public getApp(): express.Application {
    return this.app;
  }
}
