import React from 'react';
import styles from '../styles/Feed.module.css';
import ProfileSidebar from '../components/Profile/ProfileSidebar';
import ScrollList from '../components/Feed/ScrollList';
import { useAppDispatch } from '../Hooks/Hooks';
import {
  WS_CONNECTION_ORDERS,
  WS_GET_ORDER_MESSAGE,
} from '../services/actions/constants';
import { FC } from 'react';
import { useAppSelector } from '../Hooks/Hooks';

interface IProfileOrders {
  setActivator: any;
}

const ProfileOrders: FC<IProfileOrders> = ({ setActivator }) => {
  const { token } = useAppSelector((state) => state.tokenReducer);
  const accessToken = token.slice(7);
  const ws = new WebSocket(
    `wss://norma.nomoreparties.space/orders?token=${accessToken}`
  );
  const dispatch = useAppDispatch();

  let data;

  ws.onopen = (event: Event) => {
    dispatch({
      type: WS_CONNECTION_ORDERS,
      info: event.type,
    });
  };

  ws.onmessage = (event: MessageEvent) => {
    data = JSON.parse(event.data);
    dispatch({
      type: WS_GET_ORDER_MESSAGE,
      orders: data.orders,
    });
  };
  return (
    <section className={styles.profileOrdersSection}>
      <div className={styles.sidebarContainer + ' mr-15'}>
        <ProfileSidebar />
      </div>
      <ScrollList setActivator={setActivator} />
    </section>
  );
};

export default ProfileOrders;