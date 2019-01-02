import * as React from 'react';
import { User, Message, Actions, NewMessage } from "../model";
import WebSocket from '../websocket';

import ChatInput from './ChatInput';

// Props send from App.
interface chatProps {
  user: User;
}

interface chatState {
  messages: Message[];
}

class Chat extends React.Component<chatProps, chatState> {
  private listElementOvserver: HTMLDivElement | null = null;
  private webSocket: WebSocket | null = null;

  constructor(props: chatProps) {
    super(props);
  }

  state: chatState = {
    messages: [],
  };

  /**
   * If user name has been send, Chat component will be rendered
   * and this method will be called.
   */
  public componentDidMount(): void {
    this.webSocket = new WebSocket();

    this.webSocket.getMessage((msg: Message) => {
      // copy the old state
      const { messages: oldMessages } = this.state;
      /**
       * spred syntax instead of:
       * const copy = Object.assign([], oldMessages, msg)
       */
      const addMessage = [...oldMessages, msg]
      this.setState({ messages: addMessage });
      this.scrollToBottom();
    });

    this.sendNotification(null, Actions.JOINED);
  }

  private scrollToBottom(): void {
    if (!this.listElementOvserver) {
      return;
    }

    const parent = this.listElementOvserver.parentElement;
    if (!parent) {
      return;
    }

    parent.scrollTop = parent.scrollHeight;
  }

  private sendNotification(params: any, action: Actions): void {
    if (!this.webSocket) {
      return;
    }

    const { user } = this.props;
    let message: NewMessage | null = null;

    /* you can change action by type of actions */
    if (action === Actions.JOINED) {
      message = {
        from: user,
        action,
      };
    } else if (action === Actions.LEFT) {
      message = {
        from: user,
        action,
      };
    }

    if (message) {
      this.webSocket.sendNewMessage(message);
    }

  }

  private handleSendMessage(msg: string): void {
    if (!this.webSocket) {
      return;
    }

    const { user } = this.props;

    this.webSocket.sendNewMessage({
      from: user,
      content: msg,
    });
  }

  render() {
    const { user } = this.props;
    const { messages } = this.state;
    return (
      <div>
        <ChatInput
          handleSendMessage={msg => this.handleSendMessage(msg)}
        />
      </div>
    );
  }

}

export default Chat;
