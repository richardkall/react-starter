import {match} from 'react-router';
import createLocation from 'history/lib/createLocation';

import NotFound from '../../../client/views/NotFound';
import routes from '../../../client/routes';
import renderApp from './renderApp';

export default ({url}, res) => {
  const location = createLocation(url);

  match({routes, location}, (error, redirectLocation, renderProps) => {
    if (error) {
      return res.status(500).send(error.message);
    } else if (redirectLocation) {
      return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (!renderProps) {
      return res.status(404).send('Not Found');
    }

    const isNotFound = renderProps.components.indexOf(NotFound) !== -1;

    return res
      .status(isNotFound ? 404 : 200)
      .send(`<!doctype html>${renderApp(renderProps)}`);
  });
};
