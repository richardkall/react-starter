import {createStore} from 'redux';
import rootReducer from '../reducers';

export default function configureStore (initialState) {
  const create = window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore;
  return create(rootReducer, initialState);
}
