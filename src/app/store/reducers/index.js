import { combineReducers } from 'redux';

// import todos from './todos';

export default function createRootReducer(client) {
  return combineReducers({
    apollo: client.reducer(),
    // todos,
  });
}
