import React from 'react';
import {
  CurrencyIcon,
  Counter,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from '../styles/BurgerIngredients.module.css';
import PropTypes from 'prop-types';
import { useAppSelector, useAppDispatch } from '../Hooks/Hooks';
import Loader from './Loader';
import { Link, useLocation } from 'react-router-dom';
import { useDrag } from 'react-dnd';
import { getInfo } from '../services/actions/Modal';
import { FC } from 'react';
import { TIngredient } from '../services/redusers';

interface IBurgerIngredient {
  data: any;
  setActivator: any;
}
const BurgerIngredient: FC<IBurgerIngredient> = ({ data, setActivator }) => {
  const { constructorData, bunInOrder } = useAppSelector(
    (state) => state.mainReducer
  );
  
  const dispatch = useAppDispatch();
  const location = useLocation();
  const id = data._id;

  const [, dragRef] = useDrag({
    type: 'ingredient',
    item: { id },
  });

  
  if (data.length > 1) {
    return <Loader />;
  } else {
    let counter;
  const amount = constructorData.filter((item) => item._id === id).length;
    const bunsAmount = bunInOrder.filter((item) => item._id === id).length;
  
  if (amount > 0) {
    counter = (
      <Counter
        count={amount}
        size="default"
        extraClass={styles.counter + ' m-1'}
      />
    );
  } else if (bunsAmount > 0) {
    counter = (
      <Counter
        count={bunsAmount * 2}
        size="default"
        extraClass={styles.counter + ' m-1'}
      />
    );
  } else {
    counter = '';
  }
    return (
      <Link
        to={`/ingredients/${data._id}`}
        style={{ textDecoration: 'none', color: '#F2F2F3' }}
        state={{ background: location }}
      >
      <li
        ref={dragRef}
        className={styles.ingredientCard}
        onClick={() => {
          setActivator(true);
          dispatch(getInfo(data))
        }}
      >
        {counter}
        <img src={data.image} className="pl-4 pr-4 pb-1" alt="Счетчик" />
        <div className={styles.priceContainer + ' pb-1'}>
          <p className="text text_type_digits-default pr-1">
            {data.price}
          </p>
          <CurrencyIcon type="primary" />
        </div>
        <p className={styles.ingredientName + ' text text_type_main-default'}>
          {data.name}
        </p>
      </li>
      </Link>
    );
  }
};

export default BurgerIngredient;