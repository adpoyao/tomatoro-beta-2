import { SELECT_EXERCISE} from './actionType'

export const selectExercise = exercise => {
  return ({
    type: SELECT_EXERCISE,
    exercise,
  })
};

