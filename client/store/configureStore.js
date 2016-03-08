import {applyMiddleware, compose, createStore} from 'redux';
import reducer from '../reducers';
import thunk from 'redux-thunk';

export default function configureStore (initialState) {
  return createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(thunk),
      typeof window !== 'undefined' && window.devToolsExtension ? window.devToolsExtension() : (f) => f
    )
  );
}
