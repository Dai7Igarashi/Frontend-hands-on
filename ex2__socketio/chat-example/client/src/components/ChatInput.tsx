import * as React from 'react';

interface ChatInputState {
  chatMessage: string;
}

interface ChatInputProps {
  handleSendMessage: (msg: string) => void;
}

class ChatInput extends React.Component<ChatInputProps, ChatInputState> {
  constructor(props: ChatInputProps) {
    super(props);
  }

  state: ChatInputState = {
    chatMessage: "",
  };

  private handleOnChange(e: React.ChangeEvent<HTMLTextAreaElement>): void {
    this.setState({ chatMessage: e.target.value });
  }

  private onEnter(): void {
    const { chatMessage } = this.state;
    const { handleSendMessage } = this.props;

    if (chatMessage && chatMessage.length <= 140) {
      handleSendMessage(chatMessage);
      this.setState({ chatMessage: "" });
    }
  }

  render() {
    const { chatMessage } = this.state;

    return (
      <div>
        <textarea
          rows={10}
          cols={60}
          value={chatMessage}
          onChange={e => this.handleOnChange(e)}
          onKeyPress={ev => {
            if (ev.key === "Enter") {
              ev.preventDefault();
              this.onEnter();
            }
          }}
        ></textarea>
      </div>
    );
  }
}

export default ChatInput;
