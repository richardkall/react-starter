import {createStore} from 'redux';
import rootReducer from '../reducers';

export default function configureStore (initialState) {
  const create = typeof window !== 'undefined' && window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore;
  return create(rootReducer, initialState);
}
