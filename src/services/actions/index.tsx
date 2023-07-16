import {
    GET_DATA,
    GET_DATA_FAIL,
    GET_DATA_SUCCESS,
    ADD_ITEM,
    REMOVE_ITEM,
    MOVE_CONSTRUCTOR_ITEM
} from './constants'
import { request } from '../../utils';
import { AppDispatch, TIngredient } from '../redusers';

export interface IGetDataAction {
  readonly type: typeof GET_DATA;
}

export interface IGetDataSuccessAction {
  readonly type: typeof GET_DATA_SUCCESS;
  readonly data: [];
  readonly buns: [];
}

export interface IGetDataFailedAction {
  readonly type: typeof GET_DATA_FAIL;
}

export interface IAddItemAction {
  readonly type: typeof ADD_ITEM;
  readonly id: any;
  readonly specialId: string;
}

export interface IRemoveItemAction {
  readonly type: typeof REMOVE_ITEM;
  readonly id?: string;
}

export interface IMoveConstructorItemAction {
  readonly type: typeof MOVE_CONSTRUCTOR_ITEM;
  readonly dragIndex: number;
  readonly hoverIndex: number;
}

export type TIndexActions =
  | IGetDataAction
  | IGetDataSuccessAction
  | IGetDataFailedAction
  | IAddItemAction
  | IRemoveItemAction
  | IMoveConstructorItemAction;

export function getData() {
    return function (dispatch: AppDispatch) {
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
  return function (dispatch: AppDispatch) {
    dispatch({
      type: ADD_ITEM,
      id: itemId,
      specialId: specialId,
    });
  };
}

export function RemoveItem(specialId: string) {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: REMOVE_ITEM,
      id: specialId,
    });
  };
}