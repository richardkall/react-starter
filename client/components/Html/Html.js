/* eslint-disable react/no-danger */
import React, { PropTypes } from 'react';

const Html = ({ assets, content, head, initialState, styles }) => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      {head.meta.toComponent()}
      {head.title.toComponent()}
      <style>
        {styles}
      </style>
    </head>
    <body>
      <div dangerouslySetInnerHTML={{ __html: content }} id="root" />
      <script dangerouslySetInnerHTML={{ __html: `window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}` }} />
      <script src={assets.main.js} />
    </body>
  </html>
);

Html.propTypes = {
  assets: PropTypes.shape({
    main: PropTypes.shape({
      js: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  content: PropTypes.string.isRequired,
  head: PropTypes.shape().isRequired,
  initialState: PropTypes.shape(),
  styles: PropTypes.string.isRequired,
};

export default Html;
