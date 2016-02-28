import {mockStore, shallowRender} from './helpers';
import expect from 'expect';
import expectJSX from 'expect-jsx';
import hook from 'css-modules-require-hook';
import nock from 'nock';

hook({devMode: true});

expect.extend(expectJSX);

global.API = process.env.API = 'http://api.example.com';
global.expect = expect;
global.mockStore = mockStore;
global.nock = nock;
global.shallowRender = shallowRender;
