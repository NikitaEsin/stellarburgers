import {
    POST_ORDER,
} from './constants'

import { request } from '../../utils'

export function postOrder(ids) {
    return function (dispatch) {
      request(`/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: '91089aeb-9e00-4a3f-9cf9-1d0f7117fd38',
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