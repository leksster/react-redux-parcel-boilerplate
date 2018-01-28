import { loginOperation } from 'concepts/session/operations';

describe('loginOperation', () => {
  describe('success', () => {
    const response = {
      data: {
        data: {
          id: '42',
          attributes: {
            'first-name': 'Cassidy',
            'last-name': 'Adams',
            email: 'maryann_koelpin@quigley.name',
          },
          type: 'users',
        },
        meta: {
          jwt: 'abracadabra',
        },
      },
    };

    let dispatch;

    beforeEach((done) => {
      const httpClient = {
        post() {
          return new Promise((resolve) => {
            resolve(response);
          });
        },
      };

      dispatch = jest.fn(() => done());

      loginOperation.process({ httpClient }, dispatch);
    });

    it('dispatches action LOGIN_SUCCESS with user', () => {
      expect(dispatch.mock.calls.length).toBe(1);

      expect(dispatch.mock.calls[0][0]).toEqual({
        type: 'session/LOGIN_SUCCESS',
        payload: {
          users: {
            42: {
              attributes: {
                email: 'maryann_koelpin@quigley.name',
                firstName: 'Cassidy',
                lastName: 'Adams',
              },
              id: '42',
            },
          },
        },
      });
    });
  });

  describe('fail', () => {
  });
});
