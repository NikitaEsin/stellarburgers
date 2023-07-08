import { tokenReducer } from './API';
import * as types from '../actions/constants';

describe('token reducer', () => {
  it('should return the initial state', () => {
    expect(tokenReducer(undefined, {})).toEqual({
      token: '',
      isLoggedIn: false,
    });
  });
});

it('should handle GET_TOKEN', () => {
  expect(
    tokenReducer([], {
      type: types.GET_TOKEN,
      token: 'token',
    })
  ).toEqual({
    isLoggedIn: true,
    token: 'token',
  });
});

it('should handle DELETE_TOKEN', () => {
  expect(
    tokenReducer([], {
      type: types.DELETE_TOKEN,
    })
  ).toEqual({
    isLoggedIn: false,
    token: '',
  });
});