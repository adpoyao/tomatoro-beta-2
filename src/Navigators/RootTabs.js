import React from 'react';
import { TabNavigator } from 'react-navigation';

import TomatoroScreen from '../components/Screens/TomatoroScreen';
import SettingsScreen from '../components/Screens/SettingsScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';

const RootTabs = TabNavigator({
  Tomatoro: {
    screen: TomatoroScreen,
    navigationOptions: {
      tabBarLabel: 'Tomatoro Timer',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-time' : 'ios-time-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  Setting: {
    screen: SettingsScreen,
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-settings' : 'ios-settings-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
});

export default RootTabs;