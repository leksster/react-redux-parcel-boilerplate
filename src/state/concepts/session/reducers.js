/* REDUCER(S)
It's a good practice to define your state shape first.
Based on the state shape, multiple reducers might be defined in this file,
combined and exported into a single reducer function.
*/

import { combineReducers } from 'redux';
import * as types from './types';

const loginReducer = (state = 'press me', action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS: return 'Me';
    case types.LOGIN_ERROR: return 'Oops';
    default: return state;
  }
};

const sessionReducer = combineReducers({
  logged: loginReducer,
});

export default sessionReducer;
