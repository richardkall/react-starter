import * as types from '../constants/ActionTypes';
import todos from './todos';

describe('todos reducer', () => {
  it('returns initial state', () => {
    expect(todos(undefined, {})).toEqual([ // eslint-disable-line no-undefined
      {
        id: 0,
        text: 'Use Redux',
        completed: false
      }
    ]);
  });

  it('handles ADD_TODO', () => {
    expect(todos([
      {
        id: 0,
        text: 'Use Redux',
        completed: false
      }
    ], {
      type: types.ADD_TODO,
      text: 'Run the tests'
    })).toEqual([
      {
        id: 1,
        text: 'Run the tests',
        completed: false
      }, {
        id: 0,
        text: 'Use Redux',
        completed: false
      }
    ]);
  });
});
