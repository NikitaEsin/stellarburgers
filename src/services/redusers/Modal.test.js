import { infoReducer, orderReducer } from './Modal';
import * as types from '../actions/constants';
import { orderInitialState, ingredientInitialState } from './Modal';

describe('ingredient reducer', () => {
  it('should return the initial state', () => {
    expect(infoReducer(undefined, {})).toEqual({
      ...ingredientInitialState,
    });
  });
});

describe('order reducer', () => {
  it('should return the initial state', () => {
    expect(orderReducer(undefined, {})).toEqual({
      ...orderInitialState,
    });
  });
});

it('should handle GET_INGREDIENT_INFO', () => {
  expect(
    infoReducer([], {
      type: types.GET_INGREDIENT_INFO,
      dataRequest: false,
    })
  ).toEqual({
    dataRequest: false,
  });
});

it('should handle POST_ORDER', () => {
  expect(
    orderReducer([], {
      type: types.POST_ORDER,
      dataRequest: false,
    })
  ).toEqual({
    dataRequest: false,
  });
});