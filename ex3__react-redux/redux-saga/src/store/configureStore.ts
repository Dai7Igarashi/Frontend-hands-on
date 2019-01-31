import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import createSagaMiddleware from 'redux-saga';
import sagaMonitor from '../sagaMonitor';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
  return (
    {
      ...createStore(rootReducer, applyMiddleware(sagaMiddleware)),
      runSaga: sagaMiddleware.run,
    }
  );
}

export default configureStore;