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
import { RootReducer } from '../reducers';
import { RootState } from '../types';

/**
 * When you need to change state in the component or to use lifecycle methods
 * like componentDidMount(), you should use Class Components.
 */

interface AppProps {

}

interface AppState {

}

/**
 * Type React.Component<P, S, SS> is declared in
 * node_modules/@types/react/index.d.ts.
 * 
 * interface Component<P = {}, S = {}, SS = any> extends ComponentLifecycle<P, S, SS> { }
 */
class App extends React.Component<AppProps, AppState> {

}

const mapStateToProps = (reducer: RootReducer): any => {
  const { selectedSubreddit, postsBySubreddit } = reducer;
  const {
    isFetching,
    lastUpdated,
    items: posts
  } = postsBySubreddit[selectedSubreddit().subreddit!] || {
    isFetching: true,
    lastUpdated: undefined,
    items: []
  }

  return (
    {
      selectedSubreddit,
      posts,
      isFetching,
      lastUpdated,
    }
  );
}

const mapDispatchToProps = () => {

}

export default connect(mapStateToProps)(App);