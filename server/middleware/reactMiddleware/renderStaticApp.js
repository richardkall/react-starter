import {
  renderToStaticMarkup,
  renderToString
} from 'react-dom/server';

import React from 'react';
import App from '../../views/App';

export default () => {
  const assets = require('../../../build/assets.json');
  return renderToStaticMarkup(
    <App assets={assets} />
  );
};
