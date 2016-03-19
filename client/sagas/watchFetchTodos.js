import * as types from '../constants/ActionTypes';
import {call, put} from 'redux-saga/effects';
import {fetchTodosFail, fetchTodosSuccess} from '../actions/TodoActions';
import request from '../utils/request';
import {takeLatest} from 'redux-saga';

export function *fetchTodos () {
  const todos = yield call(request, '/todos');

  if (todos.error) {
    yield put(fetchTodosFail(todos.error));
  } else {
    yield put(fetchTodosSuccess(todos.data));
  }
}

export default function *watchFetchTodos () {
  yield* takeLatest(types.FETCH_TODOS_REQUEST, fetchTodos);
}
