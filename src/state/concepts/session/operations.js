import { createLogic } from 'redux-logic';
import normalize from 'json-api-normalizer';
import * as types from './types';
import { loginSucceed, loginFailed } from './actions';

export const loginOperation = createLogic({
  type: types.LOGIN,
  latest: true,

  async process({ httpClient }, dispatch, done) {
    try {
      const user =
        await httpClient.post('http://localhost:3000/api/v1/session', { auth: { email: 'registered@user.com', password: '123456' } })
          .then(resp => resp.data);
      const yo = normalize(user);
      dispatch(loginSucceed(yo));
    } catch (err) {
      // console.error(err); // might be a render err
      dispatch(loginFailed(err));
    }
    done(); // call when finished dispatching
  },
});

export default [
  loginOperation,
];
