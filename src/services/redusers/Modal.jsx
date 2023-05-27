import {
    POST_ORDER,
    GET_INGREDIENT_INFO
} from '../actions/constants'


export const orderReducer = (
    state = { number: 0, dataRequest: false, dataFailed: false },
    action
  ) => {
    switch (action.type) {
      case POST_ORDER: {
        return {
          ...state,
          number: action.number,
          dataRequest: false,
        };
      }
      default: {
        return state;
      }
    }
  };
  export const infoReducer = (
    state = { data: {}, dataRequest: false, dataFailed: false },
    action
  ) => {
    switch (action.type) {
      case GET_INGREDIENT_INFO: {
        return {
          ...state,
          data: action.info,
          dataRequest: false,
        };
      }
      default: {
        return state;
      }
    }
  };