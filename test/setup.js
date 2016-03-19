import 'babel-polyfill';
import expect from 'expect';
import expectJSX from 'expect-jsx';
import hook from 'css-modules-require-hook';
import {shallow} from './helpers';

hook({devMode: true});

expect.extend(expectJSX);

global.expect = expect;
global.shallow = shallow;
