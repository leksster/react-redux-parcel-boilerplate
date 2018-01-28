import { login, loginSucceed, loginFailed } from '../actions';

it('creates request action', () => {
  const expectedAction = { type: 'session/LOGIN_REQUEST' };

  expect(login()).toEqual(expectedAction);
});

it('creates success action', () => {
  const user = { id: '1', 'first-name': 'John' };
  const expectedAction = { type: 'session/LOGIN_SUCCESS', payload: user };

  expect(loginSucceed(user)).toEqual(expectedAction);
});

it('creates success action', () => {
  const error = { message: 'Failure' };
  const expectedAction = { type: 'session/LOGIN_ERROR', payload: error, error: true };

  expect(loginFailed(error)).toEqual(expectedAction);
});
