import * as ActionTypes from './ActionTypes';

describe('ActionTypes', () => {
  it('contains ADD_TODO', () => {
    expect(ActionTypes.ADD_TODO).toEqual('ADD_TODO');
  });

  it('contains CLEAR_COMPLETED', () => {
    expect(ActionTypes.CLEAR_COMPLETED).toEqual('CLEAR_COMPLETED');
  });

  it('contains COMPLETE_ALL', () => {
    expect(ActionTypes.COMPLETE_ALL).toEqual('COMPLETE_ALL');
  });

  it('contains COMPLETE_TODO', () => {
    expect(ActionTypes.COMPLETE_TODO).toEqual('COMPLETE_TODO');
  });

  it('contains DELETE_TODO', () => {
    expect(ActionTypes.DELETE_TODO).toEqual('DELETE_TODO');
  });

  it('contains EDIT_TODO', () => {
    expect(ActionTypes.EDIT_TODO).toEqual('EDIT_TODO');
  });
});
