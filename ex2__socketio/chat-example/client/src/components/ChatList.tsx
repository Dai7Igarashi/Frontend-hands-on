import * as React from 'react';
import { User, Message, Actions } from '../model';
import styled from 'styled-components';

interface ChatMessageProps {
  user?: User;
  message: Message;
}

const ChatMessage = (props: ChatMessageProps) => {
  const { message: { from, content, action} } = props;

  if (!from) {
    return null;
  }

  if (action === Actions.JOINED) {
    return (
      <div>
        <b>{from.name}</b> joined to the conversation!
      </div>
    );
  }

  return (
    <MesageLine>
      <AvatarImg src={from.avatar} alt="avatar" />
      <Contents><b>{from.name}</b> : {content}</Contents>
    </MesageLine>
  );
}

interface ChatListProps {
  listRef?: React.Ref<any>;
  user: User;
  messages: Message[];
}

const ChatList = (props: ChatListProps) => {
  const { messages, listRef } = props;

  return(
    <MessageWrapper>
      <div ref={listRef}>
        {messages.map(msg => (
          <ChatMessage
            key={msg.id}
            message={msg}
          />
        )
        )}
      </div>
    </MessageWrapper>
  );
}

export default ChatList;

const MessageWrapper = styled.div`
  padding-bottom: 150px;
`;

const MesageLine = styled.div`
  display: flex;
  padding: 10px 0;
`;

const AvatarImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 10px;
`;

const Contents = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
`;

