import configureMockStore from 'redux-mock-store';
import {createRenderer} from 'react-addons-test-utils';
import thunk from 'redux-thunk';

export function shallowRender (raw) {
  const renderer = createRenderer();
  renderer.render(raw);
  const output = renderer.getRenderOutput();

  return {output, renderer};
}

export function mockStore () {
  return configureMockStore([thunk]);
}
