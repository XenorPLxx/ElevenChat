import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

global.fetch = () => new Promise(() => {});
global.React = React;
global.renderer = renderer;
global.shallow = new ShallowRenderer();
