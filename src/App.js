// @flow

import React, { Component } from 'react';
import { View } from 'react-native';

import RootNavigator from './navigation/RootNavigator';

// eslint-disable-next-line
export default class App extends Component<null> {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <RootNavigator />
      </View>
    );
  }
}
