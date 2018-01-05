import { NavigationActions } from 'react-navigation';

import { RootNavigator } from '../Navigators';

const tomatoroAction = RootNavigator.router.getActionForPathAndParams('TomatoroTimer');
const initialNavState = RootNavigator.router.getStateForAction(
  tomatoroAction,
);

export const reducer = (state = initialNavState, action) => {
  let nextState;
  switch (action.type) {
    case 'TomatoroTimer':
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'TomatoroTimer' }),
      );
      break;
    case 'Settings':
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Settings' }),
      );
      break;
    case 'SelectExercise':
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'SelectExercise' }),
        state
      );
      break;
    case 'Sprights':
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Sprights' }),
        state
      );
      break;
    case 'SkipBreak':
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'TomatoroTimer' }),
        // NavigationActions.back(),
        state
      );
      break;
    default:
      nextState = RootNavigator.router.getStateForAction(action, state);
      break;
  }

  return nextState || state;
}
