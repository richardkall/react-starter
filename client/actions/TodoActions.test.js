import * as actions from './TodoActions';
import * as types from '../constants/ActionTypes';

describe('TodoActions', () => {
  it('creates ADD_TODO action', () => {
    expect(actions.addTodo('Use Redux')).toEqual({
      type: types.ADD_TODO,
      text: 'Use Redux'
    });
  });
});
