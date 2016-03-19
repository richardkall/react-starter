import * as types from '../constants/ActionTypes';
import {call, take} from 'redux-saga/effects';
import watchFetchTodos, {fetchTodos} from './watchFetchTodos';
import request from '../utils/request';

describe('fetchTodos', () => {
  it('calls request with the correct URI', () => {
    const iterator = fetchTodos();
    const result = iterator.next();
    expect(result.value).toEqual(call(request, '/todos'));
  });
});

describe('watchFetchTodos', () => {
  it('watches FETCH_TODOS_REQUEST', () => {
    const iterator = watchFetchTodos();
    const result = iterator.next();
    expect(result.value).toEqual(take(types.FETCH_TODOS_REQUEST));
  });

  it('calls fetchTodos', () => {
    const iterator = watchFetchTodos();
    iterator.next();
    const result = iterator.next();
    expect(result.value.FORK.fn.name).toEqual('fetchTodos');
  });
});
