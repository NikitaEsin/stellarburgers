import { mainReducer } from './index';
import * as types from '../actions/constants';
import { initialState } from './index';

const getDataTestData = { dataRequest: true, dataFailed: false };
const getDataSuccessTestData = {
  data: 'Some data',
  dataRequest: false,
  constructorData: [],
  buns: [],
};
const getDataFailedTestData = { dataFailed: true, dataRequest: false };

describe('data reducer', () => {
  it('should return the initial state', () => {
    expect(mainReducer(undefined, {})).toEqual({
      ...initialState,
    });
  });
});

it('should handle GET_DATA', () => {
  expect(
    mainReducer([], {
      type: types.GET_DATA,
      ...getDataTestData,
    })
  ).toEqual({
    ...getDataTestData,
  });
});

it('should handle GET_DATA_FAIL', () => {
  expect(
    mainReducer([], {
      type: types.GET_DATA_FAIL,
      ...getDataFailedTestData,
    })
  ).toEqual({
    ...getDataFailedTestData,
  });
});