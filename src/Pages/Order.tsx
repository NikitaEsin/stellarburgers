import React, { useEffect } from 'react';
import OrderContent from '../components/Order/OrderContent';
import { useAppDispatch, useAppSelector } from '../Hooks/Hooks';
import {WS_CONNECTION, WS_CONNECTION_CLOSED,} from '../services/actions/constants';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Order = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { _id } = useParams();
  const { token } = useAppSelector((state) => state.tokenReducer);
  let accessToken: string;

  if (token !== '') {
    accessToken = token.slice(7);
  } else {
    accessToken = localStorage.accessToken.slice(7);
  }

  useEffect(() => {
    if (location.pathname === `/feed/${_id}`) {
      dispatch({
        type: WS_CONNECTION,
        payload: '/all',
      });
    } else {
      console.log(accessToken);
      dispatch({
        type: WS_CONNECTION,
        payload: `?token=${accessToken}`,
      });
    }
    return () => {
      dispatch({
        type: WS_CONNECTION_CLOSED,
      });
    };
  }, []);

  return <OrderContent />;
};

export default Order;