import RootNavigator from '../Navigators/StackNavigator'

const initialState = RootNavigator.router.getStateForAction(
  RootNavigator.router.getActionForPathAndParams('SelectExercise')
);

const navigationReducer = ( state = initialState, action) => {
  const nextState = RootNavigator.router.getStateForAction(action, state)
  return nextState || state;
}

export default navigationReducer;