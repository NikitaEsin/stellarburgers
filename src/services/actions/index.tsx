import {
    GET_DATA,
    GET_DATA_FAIL,
    GET_DATA_SUCCESS,
    ADD_ITEM,
    REMOVE_ITEM,
} from './constants'
import { request } from '../../utils';

export function getData() {
    return function (dispatch: any) {
        dispatch({
            type: GET_DATA,
        });
        request(`/ingredients`)
        .then((res) => {
            dispatch({
                type: GET_DATA_SUCCESS,
                data: res.data
            })
            }).catch(() => {
                dispatch({
                    type: GET_DATA_FAIL,
                })
        })
    }
}

export function addItem(itemId: string, specialId: string) {
  return function (dispatch: any) {
    dispatch({
      type: ADD_ITEM,
      id: itemId,
      specialId: specialId,
    });
  };
}

export function RemoveItem(specialId: string) {
  return function (dispatch: any) {
    dispatch({
      type: REMOVE_ITEM,
      id: specialId,
    });
  };
}