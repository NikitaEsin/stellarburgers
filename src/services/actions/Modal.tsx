import {
    POST_ORDER,
    GET_INGREDIENT_INFO
} from './constants'
import { AppDispatch } from '../redusers/index';
import { request } from '../../utils'

export interface IStoreIngredientAction {
  readonly type: typeof GET_INGREDIENT_INFO;
  readonly item: object;
}

export interface IPostOrderAction {
  readonly type: typeof POST_ORDER;
}

interface Array {}

export type TModalsActions =
  | IStoreIngredientAction
  | IPostOrderAction

interface Array {}

export function postOrder(ids: Array, token: string) {
    return function (dispatch: AppDispatch) {
      request(`/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: token
        },
        body: JSON.stringify({
          ingredients: ids,
        }),
      })
        .then((res) => {
          dispatch({
            type: POST_ORDER,
            number: res.order.number,
          });
        })
        
    };
  }
  export function getInfo(item: object) {
    return function (dispatch: AppDispatch) {
      dispatch({
        type: GET_INGREDIENT_INFO,
        info: item,
      });
    };
  }