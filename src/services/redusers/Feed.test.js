import { wsReducer } from './Feed';
import * as types from '../actions/constants';
import { initialConnectionState } from './Feed';

const testData = { orders: 'Run test', total: 123, totalToday: 123 };

describe('connection reducer', () => {
  it('should return the initial state', () => {
    expect(wsReducer(undefined, {})).toEqual({
      ...initialConnectionState,
    });
  });
});

it('should handle WS_GET_MESSAGE', () => {
  expect(
    wsReducer([], {
      type: types.WS_GET_MESSAGE,
      ...testData,
    })
  ).toEqual({
    ...testData,
  });
});