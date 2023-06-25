import React, { useEffect }  from 'react';
import styles from '../styles/Feed.module.css';
import ScrollList from '../components/Feed/ScrollList';
import Stats from '../components/Feed/Stats';
import { useAppDispatch } from '../Hooks/Hooks';
import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION,
} from '../services/actions/constants';
import { FC } from 'react';

interface TFeed {
  setActivator: React.Dispatch<React.SetStateAction<boolean>>;
}

const Feed: FC<TFeed> = ({ setActivator }) => {
  const ws = new WebSocket('wss://norma.nomoreparties.space/orders/all');
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch({
      type: WS_CONNECTION,
      payload: '/all',
    });
    return () => {
      dispatch({
        type: WS_CONNECTION_CLOSED,
      });
    };
  }, []);

  return (
    <section className={styles.feedSection}>
      <h1 className="text text_type_main-large">Лента заказов</h1>
      <div className={styles.feedContainer}>
        <ScrollList setActivator={setActivator} />
        <Stats />
      </div>
    </section>
  );
};

export default Feed;