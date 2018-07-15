// @flow

import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import type { NavigationScreenProp } from 'react-navigation';

type Props = {
  navigation: NavigationScreenProp<null>,
};

// eslint-disable-next-line
class Intro extends Component<Props> {
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Intro Screen</Text>
        <Button title="Go to Home" onPress={() => navigation.navigate('HomeScreen')} />
      </View>
    );
  }
}

export default Intro;
