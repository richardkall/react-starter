import * as types from '../constants/ActionTypes';
import fetch from 'isomorphic-fetch';

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

export function fetchTodosSuccess (json) {
  return {type: types.FETCH_TODOS_SUCCESS, todos: json};
}

export function fetchTodos () {
  const API = process.env.API || 'http://localhost:3000/api';

  return (dispatch) => {
    return fetch(`${API}/todos`)
      .then((response) => response.json())
      .then((json) => dispatch(fetchTodosSuccess(json)))
      .catch((error) => console.log(error)); // eslint-disable-line no-console
  };
}
