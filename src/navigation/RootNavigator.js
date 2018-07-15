// @flow

import { createStackNavigator } from 'react-navigation';

import Intro from '../screens/Intro/Intro';
import Home from '../screens/Home/Home';

const RootNavigator = createStackNavigator({
  IntroScreen: {
    screen: Intro,
    navigationOptions: {
      title: 'Intro',
    },
  },
  HomeScreen: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
    },
  },
});

export default RootNavigator;
