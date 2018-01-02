import { SAY_HELLO } from './../actions/actionType'

const initialState = {
  display: '',
  level: 1, // 3 levels to choose from
  spright: null, // choice of exercise
  loading: false,
  error: null
}

export const reducer = (state=initialState, action) => {
  switch(action.type) {
    case 'Hello World':
    return Object.assign({}, state, {
      display: actions.display
    })
  default:
    return state;
  }
}