import {
  START_LOADING,
  STOP_LOADING
} from './types';

import {
  startLoading,
  stopLoading
} from '.';

describe('Actions', () => {
  it('creates START_LOADING action', () => {
    expect(startLoading()).toEqual({
      type: START_LOADING
    });
  });

  it('creates STOP_LOADING action', () => {
    expect(stopLoading()).toEqual({
      type: STOP_LOADING
    });
  });
});
