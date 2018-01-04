import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import SelectExerciseScreen from '../components/Screens/SelectExerciseScreen'
import SprightsScreen from '../components/Screens/SprightScreen'

const RootNavigator = StackNavigator ({
  SelectExercise: {
    screen: SelectExerciseScreen,
    navigationOptions: {
      headerTitle: "Select Your Exercise"
    }
  },
  Sprights: {
    screen: SprightsScreen,
    navigationOptions: {
      headerTitle: "Begin Your Stretch"
    }
  },
});

export default RootNavigator;