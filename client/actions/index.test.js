import {START_LOADING, STOP_LOADING} from '../constants/ActionTypes';
import {startLoading, stopLoading} from '.';

describe('actions', () => {
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
