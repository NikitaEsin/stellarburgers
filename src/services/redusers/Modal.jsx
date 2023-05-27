import {
    POST_ORDER
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