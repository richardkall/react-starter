import 'babel-polyfill';
import {applyMiddleware, compose, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducers';
import sagas from '../sagas';

export const sagaMiddleware = createSagaMiddleware(...sagas);

export default function configureStore (initialState) {
  return createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(sagaMiddleware),
      typeof window !== 'undefined' && window.devToolsExtension ? window.devToolsExtension() : (f) => f
    )
  );
}
