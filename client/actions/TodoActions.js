import * as types from '../constants/ActionTypes';

export function addTodo (text) {
  return {type: types.ADD_TODO, text};
}
