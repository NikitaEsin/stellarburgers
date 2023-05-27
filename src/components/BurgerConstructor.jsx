import { React } from 'react';
import styles from '../styles/BurgerConstructor.module.css';
import ItemConstructor from './ItemConstructor';
import {
  CurrencyIcon,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import { postOrder } from '../services/actions/Modal';
import PropTypes from 'prop-types';
import Loader from './Loader';
import { useDrop, useDrag } from 'react-dnd';
import { addItem } from '../services/actions';
import PriceInTotal from './PriceInTotal';
import { v4 as uuidv4 } from 'uuid';
import iconDots from '../img/icondots.svg';
import { MOVE_CONSTRUCTOR_ITEM } from '../services/actions/constants';
import { useCallback } from 'react';

const BurgerConstructor = (props) => {
  const { data, constructorData, orderBun } = useSelector(
    (state) => state.mainReducer
  );

  const moveElement = useCallback((dragIndex, hoverIndex) => {
    dispatch({
      type: MOVE_CONSTRUCTOR_ITEM,
      dragIndex,
      hoverIndex,
    });
  }, []);

  const dispatch = useDispatch();

  const [, drop] = useDrop({
    accept: 'ingredient',
    drop(itemId) {
      const specialId  = uuidv4();
      dispatch(addItem(itemId, specialId ));
    },
  });

  if (data.length < 1) {
    return <Loader />;
  } else {
    const ids = [data[0]._id, data[0]._id];
    let priceArray = [];
    if (orderBun.length > 0) {
      priceArray = [orderBun[0].price, orderBun[0].price];
    }

    let announce;
    if (constructorData.length === 0 && orderBun.length === 0) {
      announce = (
        <p className={styles.announce}>
          Пожалуйста, перенесите сюда булку и ингредиенты для создания заказа
        </p>
      );
    }
    console.log()
    return (
      <section className={styles.constructorContainer + ' pt-25'}>
        <ul ref={drop} className={styles.ingredientsList}>
          {announce}
          <ItemConstructor data={orderBun[0]} place="top" />
          <div className={styles.scroll}>
            {constructorData.map((item, index) => {
              if (item.type !== 'bun') {
                ids.push(item._id);
                priceArray.push(item.price);
                return (
                  <ItemConstructor
                    data={item}
                    key={index}
                    img={iconDots}
                    moveElement={moveElement}
                    index={index}
                    id={item._id}
                    element={item}
                  />
                );
              }
            })}
          </div>
          <ItemConstructor data={orderBun[0]} place="bottom" />
        </ul>
        <div className={styles.totalContainer + ' mt-10 mr-4'}>
          <p className="text text_type_digits-medium mr-2">
            <PriceInTotal price={priceArray} />
          </p>
          <CurrencyIcon />
          <div className={styles.buttonWrapper}>
            <Button
              htmlType="button"
              type="primary"
              size="large"
              onClick={() => {
                props.setActivator(true);
                dispatch(postOrder(ids));
              }}
            >
              Оформить заказ
            </Button>
          </div>
        </div>
      </section>
    );
  }
};

BurgerConstructor.propTypes = {
  setActive: PropTypes.func,
};

export default BurgerConstructor;