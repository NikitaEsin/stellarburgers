import  React  from 'react';
import styles from '../styles/BurgerConstructor.module.css';
import ItemConstructor from './ItemConstructor';
import {
  CurrencyIcon,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { useAppSelector, useAppDispatch } from '../Hooks/Hooks';
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
import { useNavigate } from 'react-router-dom';
import { FC } from 'react';

interface IBurgerConstructor {
  setActivator: any;
  activator: any
}

const BurgerConstructor: FC<IBurgerConstructor> = ({ setActivator }) => {
  const { data, constructorData, bunInOrder } = useAppSelector(
    (state) => state.mainReducer
  );
  const navigate = useNavigate();

  const moveElement = useCallback((dragIndex: number, hoverIndex: number) => {
    dispatch({
      type: MOVE_CONSTRUCTOR_ITEM,
      dragIndex,
      hoverIndex,
    });
  }, []);

  const dispatch = useAppDispatch();

  const [, drop] = useDrop({
    accept: 'ingredient',
    drop(itemId: string) {
      const specialId  = uuidv4();
      dispatch(addItem(itemId, specialId ));
    },
  });

  if (data.length < 1) {
    return <Loader />;
  } else {
    const ids = [data[0]._id, data[0]._id];
    let priceArray: [number?, number?] = [];
    if (bunInOrder.length > 0) {
      priceArray = [bunInOrder[0].price, bunInOrder[0].price];
    }

    let announce;
    if (constructorData.length === 0 && bunInOrder.length === 0) {
      announce = (
        <p className={styles.announce}>
          Пожалуйста, перенесите сюда булку и ингредиенты для создания заказа
        </p>
      );
    }

    const handleButtonClick = () => {
      if (sessionStorage.refreshToken) {
        setActivator(true);
        dispatch(postOrder(ids));
      } else {
        navigate('/login', { replace: true });
      }
    };

    return (
      <section className={styles.constructorContainer + ' pt-25'}>
        <ul ref={drop} className={styles.ingredientsList}>
          {announce}
          <ItemConstructor data={bunInOrder[0]} place="top" />
          <div className={styles.scroll}>
            {constructorData.map((item, index: number) => {
              if (item.type !== 'bun') {
                ids.push(item._id);
                priceArray.push(item.price);
                return (
                  <ItemConstructor
                    data={item}
                    key={item.specialId}
                    img={iconDots}
                    moveElement={moveElement}
                    index={index}
                    id={item._id}
                  />
                );
              }
            })}
          </div>
          <ItemConstructor data={bunInOrder[0]} place="bottom" />
        </ul>
        <div className={styles.totalContainer + ' mt-10 mr-4'}>
          <p className="text text_type_digits-medium mr-2">
            <PriceInTotal price={priceArray} />
          </p>
          <CurrencyIcon type="primary" />
          <div className={styles.buttonWrapper}>
            <Button
              htmlType="button"
              type="primary"
              size="large"
              onClick={() => {
                handleButtonClick();
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

export default BurgerConstructor;