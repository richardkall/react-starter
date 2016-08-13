/* eslint-disable import/no-commonjs */

require('babel-register');
require('css-modules-require-hook')({
  generateScopedName: '[name]__[local]-[hash:base64:4]',
  mode: 'local',
  rootDir: './client'
});
require('./server');
