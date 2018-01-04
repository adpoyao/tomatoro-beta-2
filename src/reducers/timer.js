import { LOAD_PTIME, LOAD_STIME } from '../actions/actionType'
const initialState = {
  pTimer: 0, // pTimer = pomodoro timer (25 minutes)
  sTimer: 0, // sTimer = spright timer (5 minutes)
  ptimerStart: false,
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
    })
  default:
    return state;
  }
}