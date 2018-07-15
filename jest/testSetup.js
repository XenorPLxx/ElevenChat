// @flow

import React from 'react';
import { JSDOM } from 'jsdom';
// import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import type { ComponentType } from 'react';

// import { store } from '../App';

export const setupJestMount = ({
  props,
  Component,
}: // connected = false,
{
  props: Object,
  Component: ComponentType<any>,
  connected: boolean,
}) => {
  require('react-native-mock-render/mock');
  const jsdom = new JSDOM('');
  global.window = jsdom.window;
  global.document = jsdom.window.document;
  Object.keys(global.window).forEach((property) => {
    if (typeof global[property] === 'undefined') {
      global[property] = global.window[property];
    }
  });
  const component = <Component {...props} />;
  // if (connected) {
  //   component = (
  //     <Provider store={store}>
  //       <Component {...props} />
  //     </Provider>
  //   );
  // }
  const wrapper = mount(component);
  return {
    props,
    wrapper,
  };
};

export const setupJestShallow = ({
  props,
  Component,
  lifecycleExperimental = false,
}: {
  props: Object,
  Component: ComponentType<any>,
  lifecycleExperimental: boolean,
}) => {
  const wrapper = shallow(<Component {...props} />, { lifecycleExperimental });
  return {
    props,
    wrapper,
  };
};
