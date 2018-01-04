import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import PropTypes from 'prop-types';


import SelectExerciseScreen from '../components/Screens/SelectExerciseScreen'
import SprightsScreen from '../components/Screens/SprightScreen'

export const RootNavigator = StackNavigator ({
  SelectExercise: { screen: SelectExerciseScreen},
  Sprights: { screen: SprightsScreen},
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
