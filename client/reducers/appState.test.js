import {
  START_LOADING,
  STOP_LOADING
} from '../actions/types';

import appState from './appState';

describe('app reducer', () => {
  it('handles START_LOADING', () => {
    expect(appState({
      loading: false
    }, {
      type: START_LOADING
    })).toEqual({
      loading: true
    });
  });

  it('handles STOP_LOADING', () => {
    expect(appState({
      loading: 123
    }, {
      type: STOP_LOADING
    })).toEqual({
      loading: false
    });
  });

  it('handles initial state', () => {
    expect(appState({
      loading: false
    }, {})).toEqual({
      loading: false
    });
  });
});
