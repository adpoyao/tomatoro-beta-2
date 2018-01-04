import { SELECT_LEVEL, SET_PTIME, SET_STIME } from './actionType';

export const selectLevel = level => {
  return ({
    type: SELECT_LEVEL,
    level
  })
}

export const setPTime = pTime => {
  return ({
    type: SET_PTIME,
    pTime
  })
}

export const setSTime = sTime => {
  return ({
    type: SET_STIME,
    sTime
  })
}