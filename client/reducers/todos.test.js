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

  it('handles COMPLETE_ALL', () => {
    expect(todos([
      {
        id: 1,
        text: 'Run the tests',
        completed: true
      }, {
        id: 0,
        text: 'Use Redux',
        completed: false
      }
    ], {
      type: types.COMPLETE_ALL
    })).toEqual([
      {
        id: 1,
        text: 'Run the tests',
        completed: true
      }, {
        id: 0,
        text: 'Use Redux',
        completed: true
      }
    ]);
  });

  it('handles COMPLETE_TODO', () => {
    expect(todos([
      {
        id: 1,
        text: 'Run the tests',
        completed: false
      }, {
        id: 0,
        text: 'Use Redux',
        completed: false
      }
    ], {
      type: types.COMPLETE_TODO,
      id: 1
    })).toEqual([
      {
        text: 'Run the tests',
        completed: true,
        id: 1
      }, {
        id: 0,
        text: 'Use Redux',
        completed: false
      }
    ]);
  });

  it('handles DELETE_TODO', () => {
    expect(todos([
      {
        id: 1,
        text: 'Run the tests',
        completed: false
      }, {
        id: 0,
        completed: false,
        text: 'Use Redux'
      }
    ], {
      type: types.DELETE_TODO,
      id: 1
    })).toEqual([
      {
        id: 0,
        text: 'Use Redux',
        completed: false
      }
    ]);
  });

  it('handles EDIT_TODO', () => {
    expect(todos([
      {
        id: 1,
        text: 'Run the tests',
        completed: false
      }, {
        id: 0,
        text: 'Use Redux',
        completed: false
      }
    ], {
      type: types.EDIT_TODO,
      text: 'Fix the tests',
      id: 1
    })).toEqual([
      {
        id: 1,
        text: 'Fix the tests',
        completed: false
      }, {
        id: 0,
        text: 'Use Redux',
        completed: false
      }
    ]);
  });

  it('handles CLEAR_COMPLETED', () => {
    expect(todos([
      {
        id: 1,
        text: 'Run the tests',
        completed: true
      }, {
        id: 0,
        text: 'Use Redux',
        completed: false
      }
    ], {
      type: types.CLEAR_COMPLETED
    })).toEqual([
      {
        text: 'Use Redux',
        completed: false,
        id: 0
      }
    ]);
  });
});
