import * as types from '../constants/ActionTypes';

const initialState = [{
  id: 0,
  completed: false,
  text: 'Use Redux'
}];

export default function todos (state = initialState, action) {
  switch (action.type) {
    case types.ADD_TODO:
      return [
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.text
        },
        ...state
      ];

    default:
      return state;
  }
}
