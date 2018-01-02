
const initialState = {
  pTimer: 2500, // pTimer = pomodoro timer (25 minutes)
  sTimer: 500, // sTimer = spright timer (5 minutes)
  ptimerStart: false,
  sTimerStart: false,
  loading: false,
  error: null
}

export const reducer = (state=initialState, action) => {
  switch(action.type) {
    case '':
    return 

  default:
    return state;
  }
}