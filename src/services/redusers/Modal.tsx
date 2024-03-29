import {
    POST_ORDER,
    GET_INGREDIENT_INFO,
} from '../actions/constants'
import { TModalsActions } from '../actions/Modal';

export const orderInitialState = {
  number: 0, dataRequest: false, dataFailed: false
}
export const orderReducer = (
    state = orderInitialState,
    action: TModalsActions
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
  export const ingredientInitialState = {
    data: {}, dataRequest: false, dataFailed: false
  }
  export const infoReducer = (
    state = ingredientInitialState,
    action: any
  ) => {
    switch (action.type) {
      case GET_INGREDIENT_INFO: {
        return {
          ...state,
          data: action.item,
          dataRequest: false,
        };
      }
      default: {
        return state;
      }
    }
  };