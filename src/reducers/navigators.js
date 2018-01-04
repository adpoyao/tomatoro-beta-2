import { NavigationActions } from 'react-navigation';

import { RootNavigator } from '../Navigators';

// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = RootNavigator.router.getActionForPathAndParams('SelectExercise');
const tempNavState = RootNavigator.router.getStateForAction(firstAction);
const secondAction = RootNavigator.router.getActionForPathAndParams('Sprights');
const initialNavState = RootNavigator.router.getStateForAction(
  secondAction,
  tempNavState
);

export const reducer = (state = initialNavState, action) => {
  let nextState;
  switch (action.type) {
    case 'SelectExercise':
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      );
      break;
    case 'Sprights':
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Sprights' }),
        state
      );
      break;
    default:
      nextState = RootNavigator.router.getStateForAction(action, state);
      break;
  }

  return nextState || state;
}
