import expect from 'expect';
import expectJSX from 'expect-jsx';
import hook from 'css-modules-require-hook';
import {shallowRender} from './helpers';

hook({devMode: true});

expect.extend(expectJSX);

global.expect = expect;
global.shallowRender = shallowRender;
