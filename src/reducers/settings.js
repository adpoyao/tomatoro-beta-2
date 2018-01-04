import { SELECT_LEVEL, SET_STIME, SET_PTIME } from '../actions/actionType'

const initialState = {
  level: 1,
  pomodoroTime: 1500000,
  stretchTime: 300000
}

export const reducer = (state=initialState, action) => {
  switch(action.type) {
    case SELECT_LEVEL:
      return Object.assign({}, state, {
        level: action.level,
      });
    case SET_PTIME:
      return Object.assign({}, state, {
        pomodoroTime: action.pTime
      });
    case SET_STIME:
      return Object.assign({}, state, {
        stretchTime: action.sTime
      })
  default:
    return state;
  }
}