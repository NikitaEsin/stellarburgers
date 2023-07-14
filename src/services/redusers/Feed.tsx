import {
  WS_GET_MESSAGE,
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION,
} from '../actions/constants';
import { TFeedActions } from '../actions/Feed';
  
export type TOrder = {
  createdAt: string;
  ingredients: Array<string>;
  name: string;
  number: number;
  status: string;
  updatedAt: string;
  _id: string;
};

type ConnectionState = {
  orders: TOrder[];
  total: number;
  totalToday: number;
  wsConnected: boolean;
  error?: string;
};

export const initialConnectionState: ConnectionState = {
  orders: [],
  total: 0,
  totalToday: 0,
  wsConnected: false,
};

export const wsReducer = (
  state = initialConnectionState,
  action: TFeedActions
) => {
  switch (action.type) {
    case WS_CONNECTION:
      return {
        ...state,
        error: undefined,
        wsConnected: true,
      };
    case WS_CONNECTION_ERROR:
      return {
        ...state,
        error: action.payload,
        wsConnected: false,
      };
    case WS_CONNECTION_CLOSED:
      return {
        ...state,
        error: undefined,
        wsConnected: false,
      };
    case WS_GET_MESSAGE:
      return {
        ...state,
        error: undefined,
        orders: action.orders,
        total: action.total,
        totalToday: action.totalToday,
      };
    default: {
      return state;
    }
  }
};