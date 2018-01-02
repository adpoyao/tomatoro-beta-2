import { createStore, combineReducers, compose } from 'redux'
import reducer from './reducers';

let composeEnhancers = compose;

if(__DEV__){
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const store = createStore(reducer, composeEnhancers());

export default store;