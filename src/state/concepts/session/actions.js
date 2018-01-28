import * as types from './types';

export const login = () => ({
  type: types.LOGIN_REQUEST,
});

export const loginSucceed = user => ({
  type: types.LOGIN_SUCCESS,
  payload: user,
});

export const loginFailed = error => ({
  type: types.LOGIN_ERROR,
  payload: error,
  error: true,
});
