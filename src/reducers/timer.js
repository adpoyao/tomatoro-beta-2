import { LOAD_PTIME, LOAD_STIME, TOGGLE_STIMER, TOGGLE_PTIMER } from '../actions/actionType'

const initialState = {
  pTimer: 0, // pTimer = pomodoro timer (25 minutes)
  sTimer: 0, // sTimer = spright timer (5 minutes)
  pTimerStart: false,
  sTimerStart: false,
  loading: false,
  error: null
}

export const reducer = (state=initialState, action) => {
  switch(action.type) {
    case LOAD_PTIME:
    return Object.assign({}, state, {
      pTimer: action.time
    });
    case LOAD_STIME:
    return Object.assign({}, state, {
      sTimer: action.time
    });
    case TOGGLE_PTIMER:
    return Object.assign({}, state, {
      pTimerStart: action.toggle
    });
    case TOGGLE_STIMER:
    return Object.assign({}, state, {
      sTimerStart: action.toggle
    })
  default:
    return state;
  }
}