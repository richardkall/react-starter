import {START_LOADING, STOP_LOADING} from '../constants/ActionTypes';
import app from './app';

describe('app reducer', () => {
  it('handles START_LOADING', () => {
    expect(app({
      loading: false
    }, {
      type: START_LOADING
    })).toEqual({
      loading: true
    });
  });

  it('handles STOP_LOADING', () => {
    expect(app({
      loading: 123
    }, {
      type: STOP_LOADING
    })).toEqual({
      loading: false
    });
  });

  it('handles initial state', () => {
    expect(app({
      loading: false
    }, {})).toEqual({
      loading: false
    });
  });
});
