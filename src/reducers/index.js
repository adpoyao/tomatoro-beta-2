import { combineReducers } from 'redux';
import { reducer as stretches } from './stretches';
import { reducer as timer } from './timer';
import { reducer as settings } from './settings';
import { reducer as nav }  from './navigators'

const rootReducer = combineReducers({
  stretches,
  settings,
  timer,
  nav
});

export default rootReducer;
