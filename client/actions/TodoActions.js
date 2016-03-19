import * as types from '../constants/ActionTypes';

export function addTodo (text) {
  return {type: types.ADD_TODO, text};
}

export function clearCompleted () {
  return {type: types.CLEAR_COMPLETED};
}

export function completeAll () {
  return {type: types.COMPLETE_ALL};
}

export function completeTodo (id) {
  return {type: types.COMPLETE_TODO, id};
}

export function deleteTodo (id) {
  return {type: types.DELETE_TODO, id};
}

export function editTodo (id, text) {
  return {type: types.EDIT_TODO, id, text};
}

export function fetchTodosFail (error) {
  return {type: types.FETCH_TODOS_FAIL, error};
}

export function fetchTodosRequest () {
  return {type: types.FETCH_TODOS_REQUEST};
}

export function fetchTodosSuccess (todos) {
  return {type: types.FETCH_TODOS_SUCCESS, todos};
}
