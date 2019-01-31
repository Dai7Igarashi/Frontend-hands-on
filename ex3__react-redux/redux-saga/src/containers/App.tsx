/**
 * ****************************************************************************
 * Container has 'state'.
 * The main role of container-components is 'hold & change state'.
 * If state is not needed in a component, you should use SFC(Stateless Functional Component)!!
 * (Refer to ./components)
 *  
 * In react & redux architecture, the cycle of state in container likes below.
 * ****************************************************************************
 * 
 * 1. The function 'mapStateToProps' returns the state from store that manages all states.
 *    The returnd state is served as Props to a component which passed connect function. 
 * 2. The function 'mapDispatchToProps' returns the dispatch function as Props to a component.
 *    An action is dispatch to store, and state will be changed by the reducer.
 * 3. Connect function provided from a 'react-redux' module serves state and dispatch
 *    as props to components.
 *    For instance, server state and dispatch to App Component like "connect(mapStateToProps, mapDispatchToProps)(App)".
 */

import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as actions from '../actions';
import Picker from '../components/Picker';
import Posts from '../components/Posts';
import {
  RootState,
  Reddit, Post,
  TYPE_OF_REDDIT, TYPE_POST
} from '../store/state';

/* this is not state initialized in App */
type AppState = Reddit & Post<TYPE_POST>

interface AppProps extends AppState {
  nextReddit: (next: TYPE_OF_REDDIT) => void;
  invalidReddit: (prev: TYPE_OF_REDDIT) => void;
}

/**
 * Type React.Component<P, S, SS> is declared in
 * node_modules/@types/react/index.d.ts.
 * 
 * interface Component<P = {}, S = {}, SS = any> extends ComponentLifecycle<P, S, SS> { }
 */
class App extends React.Component<AppProps> {
  
  private handleChange = (nextReddit: TYPE_OF_REDDIT): void => {
    this.props.nextReddit(nextReddit);
  }

  private handleRefreshClick = (e: React.MouseEvent): void => {
    e.preventDefault();
    /**
    * { reddit_root_state: { reddit } } = state;
    * You can call `reddit_root_state.reddit: string` by reddit.
    */
    const { invalidReddit, reddit } = this.props;
    invalidReddit(reddit);
  }

  render() {
    const { reddit, items, isFetching, lastUpdated } = this.props;
    
    return (
      <div>
        <Picker
          value={reddit}
          handlePickerChange={(next) => this.handleChange(next)}
          options={['reactjs', 'frontend', 'javascript', 'redux']}
        />
        <p>
          {lastUpdated &&
            <span>
              Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
            </span>
          }
          {!isFetching && (
            <a href="#" onClick={e => this.handleRefreshClick(e)}>
              Refresh
            </a>
          )}
        </p>
        {(isFetching && items!.length === 0) &&
          <h2>Loading...</h2>
        }
        {(!isFetching && items!.length === 0) &&
          <h2>Empty on this keyword!</h2>
        }
        {items!.length > 0 && (
          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <Posts items={items!} />
          </div>
        )}
      </div>
    );
  }

}

const mapStateToProps = (state: RootState): AppState => {
  const { reddit_root_state, posts_root_state } = state;
  const { isFetching, lastUpdated, items } = posts_root_state[reddit_root_state] || {
    isFetching: true,
    lastUpdated: undefined,
    items: []
  }
  return {
    reddit: reddit_root_state,
    items,
    isFetching,
    lastUpdated
  }

  /**
   * Row State structure is below.
   * RootState:
   *  reddit_root_state,
   *  posts_root_state: {
   *    [reddit_root_state.reddit]: {
   *       isFetching,
   *       items,
   *       lastUpdated
   *    }
   *  }
   */

}

const mapDispatchToProps = (dispatch: Dispatch<actions.RedditActionType>) => {
  return {
    nextReddit: (next: TYPE_OF_REDDIT) => dispatch(actions.selectRedditActionCreater(next)),
    invalidReddit: (prev: TYPE_OF_REDDIT) => dispatch(actions.invalidateRedditActionCreater(prev))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
