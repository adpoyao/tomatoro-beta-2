import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import PropTypes from 'prop-types';

import TomatoroScreen from '../components/Screens/TomatoroScreen';
import SettingsScreen from '../components/Screens/SettingsScreen';
import SelectExerciseScreen from '../components/Screens/SelectExerciseScreen'
import SprightsScreen from '../components/Screens/SprightScreen'

export const RootNavigator = StackNavigator ({
  TomatoroTimer: { 
    screen: TomatoroScreen,
    navigationOptions: {
      title: 'Tomatoro Timer'
    }
  },
  Settings: { 
    screen: SettingsScreen,
    navigationOptions: {
      title: 'Settings'
    }},
  SelectExercise: { 
    screen: SelectExerciseScreen,
    navigationOptions: {
      title: 'Select your exercise'
  }},
  Sprights: { 
    screen: SprightsScreen,
    navigationOptions: {
      title: 'Sprights'
    }
  },
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <RootNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};


const mapStateToProps = state => {
  return {
    nav: state.nav,
  }
}

export default connect(mapStateToProps)(AppWithNavigationState);
