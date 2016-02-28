import {applyMiddleware, createStore} from 'redux';
import rootReducer from '../reducers';
import thunkMiddleware from 'redux-thunk';

export default function configureStore (initialState) {
  const create = typeof window !== 'undefined' && window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore;

  const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(create);

  return createStoreWithMiddleware(rootReducer, initialState);
}
