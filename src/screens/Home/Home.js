// @flow
import React, { Component } from 'react';
import { View, Text } from 'react-native';

// eslint-disable-next-line
class Home extends Component<null> {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

export default Home;
