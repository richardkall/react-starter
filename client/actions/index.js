import {
  START_LOADING,
  STOP_LOADING
} from './types';

export const startLoading = () => ({
  type: START_LOADING
});

export const stopLoading = () => ({
  type: STOP_LOADING
});
