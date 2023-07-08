import { infoReducer, orderReducer } from './Modal';
import * as types from '../actions/constants';
import { orderInitialState, ingredientInitialState } from './Modal';

const getIngredientTestData = { data: undefined, dataRequest: false };
const postOrderTestData = { dataRequest: true, dataFailed: false };
const postSuccessTestData = { number: 123, dataRequest: false };
const postFailedTestData = { dataFailed: true, dataRequest: false };

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
      ...getIngredientTestData,
    })
  ).toEqual({
    ...getIngredientTestData,
  });
});

it('should handle POST_ORDER', () => {
  expect(
    orderReducer([], {
      type: types.POST_ORDER,
      ...postOrderTestData,
    })
  ).toEqual({
    ...postOrderTestData,
  });
});

it('should handle POST_SUCCESS', () => {
  expect(
    orderReducer([], {
      type: types.POST_SUCCESS,
      ...postSuccessTestData,
    })
  ).toEqual({
    ...postSuccessTestData,
  });
});

it('should handle POST_FAIL', () => {
  expect(
    orderReducer([], {
      type: types.POST_FAIL,
      ...postFailedTestData,
    })
  ).toEqual({
    ...postFailedTestData,
  });
});