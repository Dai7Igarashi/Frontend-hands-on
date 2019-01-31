import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';

let middleWare = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleWare = Object.assign([], ...middleWare, createLogger());
}

/**
 * createStore(combineReducer(selectedSubreddit, postsBySubreddit))
 * 
 * "state.selectedSubreddit & state.postsBySubreddit" are able to call
 * in the component 'App' which has been adopted connect function like "connect()(App)".
 */
const store = createStore(
  rootReducer,
  applyMiddleware(...middleWare)
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
