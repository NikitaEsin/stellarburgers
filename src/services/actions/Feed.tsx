import {
  WS_CONNECTION,
  WS_GET_MESSAGE,
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_SUCCESS,
} from './constants';
import { AppDispatch } from '../redusers';
import { TOrder } from '../redusers/Feed';

export interface IStartConnection {
  readonly type: typeof WS_CONNECTION;
}

export interface IWsConnectionSuccess {
  readonly type: typeof WS_CONNECTION_SUCCESS;
  readonly payolad: string;
}

export interface IGetMessage {
  readonly type: typeof WS_GET_MESSAGE;
  readonly orders: TOrder[];
  readonly total: number;
  readonly totalToday: number;
}

export interface IWsConnectionClosed {
  readonly type: typeof WS_CONNECTION_CLOSED;
  readonly payload: string;
}

export interface IWsConnectionError {
  readonly type: typeof WS_CONNECTION_ERROR;
  readonly payload: string;
}

export interface IWsConnectionClosed {
  readonly type: typeof WS_CONNECTION_CLOSED;
  readonly payload: string;
}

export type TFeedActions =
  | IGetMessage
  | IWsConnectionClosed
  | IStartConnection
  | IWsConnectionError
  | IWsConnectionSuccess;

export function startConnection() {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: WS_CONNECTION ,
    });
  };
}

export function connectionSuccess(payload: string) {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: WS_CONNECTION_SUCCESS,
      payload: payload,
    });
  };
}

export function connectionError(payload: string) {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: WS_CONNECTION_ERROR,
      payload: payload,
    });
  };
}

export function connectionClosed(payload: string) {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: WS_CONNECTION_CLOSED,
      payload: payload,
    });
  };
}

export function onMessage(orders: TOrder[], total: number, totalToday: number) {
  return function (dispatch: AppDispatch) {
    console.log(orders)
    dispatch({
      type: WS_GET_MESSAGE,
      orders: orders,
      total: total,
      totalToday: totalToday,
    });
  };
}