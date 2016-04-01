import {START_LOADING, STOP_LOADING} from './ActionTypes';

describe('ActionTypes', () => {
  it('contains START_LOADING', () => {
    expect(START_LOADING).toEqual('START_LOADING');
  });

  it('contains STOP_LOADING', () => {
    expect(STOP_LOADING).toEqual('STOP_LOADING');
  });
});
