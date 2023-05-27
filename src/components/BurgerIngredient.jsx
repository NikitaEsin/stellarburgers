import React from 'react';
import {
  CurrencyIcon,
  Counter,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from '../styles/BurgerIngredients.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './Loader';

import { useDrag } from 'react-dnd';

const BurgerIngredient = (props) => {
  const { constructorData, orderBun } = useSelector(
    (state) => state.mainReducer
  );
  console.log(props)

  const dispatch = useDispatch();

  const id = props.data._id;

  const [, dragRef] = useDrag({
    type: 'ingredient',
    item: { id },
  });

  let counter;
  const amount = constructorData.filter((item) => item._id === id).length;
  const bunsAmount = orderBun.filter((item) => item._id === id).length;
  if (amount > 0) {
    counter = (
      <Counter
        count={amount}
        size="default"
        extraClass="m-1"
        className={styles.counter}
      />
    );
  } else if (bunsAmount > 0) {
    counter = (
      <Counter
        count={bunsAmount * 2}
        size="default"
        extraClass="m-1"
        className={styles.counter}
      />
    );
  } else {
    counter = '';
  }

  if (props.data.length > 1) {
    return <Loader />;
  } else {
    return (
      <li
        ref={dragRef}
        className={styles.ingredientCard}
        onClick={() => {
          props.setActive(true);
          dispatch();
        }}
      >
        {counter}
        <img src={props.data.image} className="pl-4 pr-4 pb-1" alt="Счетчик" />
        <div className={styles.priceContainer + ' pb-1'}>
          <p className="text text_type_digits-default pr-1">
            {props.data.price}
          </p>
          <CurrencyIcon type="primary" />
        </div>
        <p className={styles.ingredientName + ' text text_type_main-default'}>
          {props.data.name}
        </p>
      </li>
    );
  }
};

BurgerIngredient.propTypes = {
  data: PropTypes.object.isRequired,
  setActive: PropTypes.func,
};

export default BurgerIngredient;