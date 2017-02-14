import { combineReducers } from 'redux';

export default client => combineReducers({
  apollo: client.reducer(),
});
