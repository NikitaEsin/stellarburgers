import React from 'react';
import styles from '../../styles/Feed.module.css';
import { useAppSelector } from '../../Hooks/Hooks';
import Loader from '../Loader';
import { TOrder } from '../../services/redusers/Feed';

const Stats = () => {
  const { orders, total, totalToday } = useAppSelector(
    (state: any) => state.wsReducer
  );
  const done: Array<TOrder> = [];
  const notDone: Array<TOrder> = [];

  if (orders === undefined) {
    return <Loader />;
  } else {
    orders.forEach((order: TOrder) => {
      if (order.status === 'done') {
        done.push(order);
      } else {
        notDone.push(order);
      }
    });

    const last10ready: Array<TOrder> = done.slice(0, 10);
    const last10notReady: Array<TOrder> = notDone.slice(0, 10);

    return (
      <section className={styles.statsSection + ' ml-15'}>
        <div className={styles.statsContainer}>
          <div className={styles.statContainer}>
            <p className="text text_type_main-medium mb-6">Готовы:</p>
            <div className={styles.readyContainer}>
              {last10ready.map((item: TOrder, index: number) => {
                return (
                  <p key={index} className={styles.preparedOrder + ' text text_type_main-default mb-2'}>
                    {item.number}
                  </p>
                );
              })}
            </div>
          </div>
          <div className={styles.statContainer + ' ml-9'}>
            <p className="text text_type_main-medium mb-6">В работе:</p>
            <div className={styles.readyContainer}>
              {last10notReady.map((item: TOrder, index: number) => {
                return (
                  <p key={index} className="text text_type_main-default mb-2">
                    {item.number}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
        <p className="mt-15 text text_type_main-medium">Выполнено за все время:</p>
        <p className={styles.statNumbers + ' text text_type_digits-large'}>{total}</p>
        <p className="mt-15 text text_type_main-medium">Выполнено за сегодня:</p>
        <p className={styles.statNumbers + ' text text_type_digits-large'}>{totalToday}</p>
      </section>
    );
  }
};

export default Stats;