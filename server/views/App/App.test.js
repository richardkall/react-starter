import React from 'react';

import App from '.';

describe('App', () => {
  it('renders correctly', () => {
    const props = {
      assets: {
        main: {
          css: '/main.css',
          js: '/main.js'
        }
      },
      content: '<h1>Welcome</h1>',
      head: {
        meta: {
          toComponent: () => {}
        },
        title: {
          toComponent: () => {}
        }
      },
      initialState: {app: {firstState: 'yes'}}
    };
    const {output} = shallow(<App {...props} />);

    expect(output).toEqualJSX(
      <html>
        <head>
          <meta charSet='utf-8' />
          <meta content='width=device-width, initial-scale=1' name='viewport' />
          <link href={props.assets.main.css} rel='stylesheet' />
        </head>
        <body>
          <div dangerouslySetInnerHTML={{__html: props.content}} id='root' />
          <script dangerouslySetInnerHTML={{__html: `window.__INITIAL_STATE__ = ${JSON.stringify(props.initialState)}`}} />
          <script src={props.assets.main.js} />
        </body>
      </html>
    );
  });
});
