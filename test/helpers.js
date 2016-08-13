import {createRenderer} from 'react-addons-test-utils';

export const shallow = (raw) => {
  const renderer = createRenderer();

  renderer.render(raw);

  return {
    output: renderer.getRenderOutput(),
    renderer
  };
};
