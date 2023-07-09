import {
    WS_CONNECTION,
    WS_GET_MESSAGE,
    WS_CONNECTION_CLOSED,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_SUCCESS,
    WS_CLOSE
  } from '../actions/constants';
  import type { Middleware, MiddlewareAPI } from 'redux';
  import type { AppDispatch, RootState } from '../redusers';
  
  interface IWsConnectionStartAction {
    readonly type: typeof WS_CONNECTION;
    readonly payload: string;
  }
  
  interface IWsGetMessageAction {
    readonly type: typeof WS_GET_MESSAGE;
    readonly payload: any;
  }
  
  interface IWsConnectionClosedAction {
    readonly type: typeof WS_CONNECTION_CLOSED;
    readonly payload: string;
  }
  
  interface IWsConnectionErrorAction {
    readonly type: typeof WS_CONNECTION_ERROR;
    readonly payload: string;
  }
  
  interface IWsConnectionSuccessAction {
    readonly type: typeof WS_CONNECTION_SUCCESS;
    readonly payload: string;
  }

  interface IWsCloseAction {
    readonly type: typeof WS_CLOSE;
    readonly payload: string;
  }
  
  type AppActions =
    | IWsConnectionStartAction
    | IWsGetMessageAction
    | IWsConnectionClosedAction
    | IWsConnectionErrorAction
    | IWsConnectionSuccessAction
    | IWsCloseAction;
  
  export const socketMiddleware = (wsUrl: string): Middleware => {
    return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
      let socket: WebSocket | null = null;
  
      return (next) => (action: AppActions) => {
        const { dispatch, getState } = store;
        const { type, payload } = action;
  
        if (type === WS_CONNECTION) {
          socket = new WebSocket(`${wsUrl}${payload}`);
        }
        if (socket) {
          socket.onopen = (event) => {
            dispatch({ type: WS_CONNECTION_SUCCESS, payload: event });
          };
          socket.onerror = (event) => {
            dispatch({ type: WS_CONNECTION_ERROR, payload: event });
          };
          socket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            dispatch({
              type: WS_GET_MESSAGE,
              orders: data.orders,
              total: data.total,
              totalToday: data.totalToday,
            });
          };
          socket.onclose = (event) => {
            dispatch({ type: WS_CONNECTION_CLOSED, payload: event });
          };
        }

        if (type === WS_CLOSE && socket) {
          socket.close()
        }
  
        next(action);
      };
    }) as Middleware;
  };