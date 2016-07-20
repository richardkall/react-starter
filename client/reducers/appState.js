import {
  START_LOADING,
  STOP_LOADING
} from '../actions/types';

const initialState = {
  loading: false
};

export default (state = initialState, {type}) => {
  switch (type) {
    case START_LOADING:
      return Object.assign({}, state, {
        loading: true
      });

    case STOP_LOADING:
      return Object.assign({}, state, {
        loading: false
      });

    default:
      return state;
  }
};
