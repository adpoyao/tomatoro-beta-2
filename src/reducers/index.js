import { combineReducers } from 'redux'
import { reducer as stretchReducer } from './stretches'
import { reducer as timerReducer } from './timer'

const rootReducer = combineReducers({
  streches: stretchReducer,
  timer: timerReducer
});

export default rootReducer;