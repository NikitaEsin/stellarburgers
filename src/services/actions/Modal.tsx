import {
    POST_ORDER,
    GET_INGREDIENT_INFO
} from './constants'

import { request } from '../../utils'

export function postOrder(ids: any) {
    return function (dispatch: any) {
      request(`/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: localStorage.refreshToken,
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
  export function getInfo(item: any) {
    return function (dispatch: any) {
      dispatch({
        type: GET_INGREDIENT_INFO,
        info: item,
      });
    };
  }