import { LOAD_PTIME, LOAD_STIME } from './actionType';

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
