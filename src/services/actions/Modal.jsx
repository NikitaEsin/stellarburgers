import {
    POST_ORDER,
    GET_INGREDIENT_INFO
} from './constants'

import { request } from '../../utils'

export function postOrder(ids) {
    return function (dispatch) {
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
            console.log(res)
          dispatch({
            type: POST_ORDER,
            number: res.order.number,
          });
        })
        
    };
  }
  export function getInfo(item) {
    return function (dispatch) {
      dispatch({
        type: GET_INGREDIENT_INFO,
        info: item,
      });
    };
  }