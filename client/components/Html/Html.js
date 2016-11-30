/* eslint-disable react/no-danger */
import React, { PropTypes } from 'react';

const Html = ({ assets, content, head, initialState }) => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      {head.meta.toComponent()}
      {head.title.toComponent()}
      <link href={assets.main.css} rel="stylesheet" />
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
      css: PropTypes.string.isRequired,
      js: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  content: PropTypes.string.isRequired,
  head: PropTypes.shape().isRequired,
  initialState: PropTypes.shape(),
};

export default Html;
