import {match} from 'react-router';
import createLocation from 'history/lib/createLocation';

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

    return res.send(`<!doctype html>${renderApp(renderProps)}`);
  });
};
