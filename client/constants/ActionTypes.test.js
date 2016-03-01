import * as types from './ActionTypes';

describe('ActionTypes', () => {
  it('contains ADD_TODO', () => {
    expect(types.ADD_TODO).toEqual('ADD_TODO');
  });

  it('contains CLEAR_COMPLETED', () => {
    expect(types.CLEAR_COMPLETED).toEqual('CLEAR_COMPLETED');
  });

  it('contains COMPLETE_ALL', () => {
    expect(types.COMPLETE_ALL).toEqual('COMPLETE_ALL');
  });

  it('contains COMPLETE_TODO', () => {
    expect(types.COMPLETE_TODO).toEqual('COMPLETE_TODO');
  });

  it('contains DELETE_TODO', () => {
    expect(types.DELETE_TODO).toEqual('DELETE_TODO');
  });

  it('contains EDIT_TODO', () => {
    expect(types.EDIT_TODO).toEqual('EDIT_TODO');
  });

  it('contains FETCH_TODOS_SUCCESS', () => {
    expect(types.FETCH_TODOS_SUCCESS).toEqual('FETCH_TODOS_SUCCESS');
  });
});
