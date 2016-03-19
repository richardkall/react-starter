import configureMockStore from 'redux-mock-store';
import {createRenderer} from 'react-addons-test-utils';

export function shallow (raw) {
  const renderer = createRenderer();
  renderer.render(raw);
  const output = renderer.getRenderOutput();

  return {output, renderer};
}

export function mockStore () {
  return configureMockStore();
}
