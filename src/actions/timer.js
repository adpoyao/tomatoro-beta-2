import { LOAD_PTIME, LOAD_STIME, TOGGLE_PTIMER, TOGGLE_STIMER } from './actionType';

export const loadPTime = time => {
  return ({
    type: LOAD_PTIME,
    time,
  })
};

export const loadSTime = time => {
  return ({
    type: LOAD_STIME,
    time,
  })
};

export const togglePTimer = toggle => {
  return ({
    type: TOGGLE_PTIMER,
    toggle
  })
}

export const toggleSTimer = toggle => {
  return ({
    type: TOGGLE_STIMER,
    toggle
  })
}