import { createStore } from 'redux';

// import reducer from '../reducers';

export default preloadedState => createStore(
  () => {}, // reducer,
  preloadedState,
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f,
);
