import * as React from 'react';
import { User, Message } from '../model';

import Chat from './Chat';

const AVATAR_URL = "https://api.adorable.io/avatars/285";

interface AppState {
  user: User | null;
  usernameInit: boolean;
}

const getRandomId = (): number => Math.floor(Math.random() * 1000000) + 1;

// generics <Props, State>
class App extends React.Component<any, AppState> {
  // Initialize state
  state: AppState = {
    user: null,
    usernameInit: false,
  };

  private viewPrompt = (): void => {
    const prt = prompt("Set Username", "name");

    const username = prt ? prt : "No Name";
    this.onSettingUser(username);
  }

  private onSettingUser = (username: string) => {
    const randomId = getRandomId();

    const user: User = {
      name: username,
      id: randomId,
      avatar: `${AVATAR_URL}/${randomId}.png`,
    };

    this.setState({
      user,
      usernameInit: true,
    });
  };

  render() {
    const { user } = this.state;
    return(
      <React.Fragment>
        {!user && this.viewPrompt()}
        {user && 
          <Chat user={user} />
        }
      </React.Fragment>
    );
  }


}

export default App;
