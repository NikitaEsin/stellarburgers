import React from 'react';
import Table from './Table';
import styles from '../styles/BurgerIngredients.module.css';
import BurgerIngredient from './BurgerIngredient';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';
import { useSelector } from 'react-redux';
import { FC } from 'react';

interface IBurgerIngredients {
  setActivator: any;
  activator: any
}

const BurgerIngredients: FC<IBurgerIngredients> = ({ setActivator }) => {
  const { data } = useSelector((state: any) => state.mainReducer);

  const [bunRef, bunView] = useInView({
    threshold: 0,
  });

  const [sauceRef, sauceView] = useInView({
    threshold: 0,
  });

  const [mainRef, mainView] = useInView({
    threshold: 0,
  });

  return (
    <section className={styles.container + ' pt-10'}>
      <h1 className="text text_type_main-large pb-5">Соберите бургер</h1>
      <Table bun={bunView} sauce={sauceView} main={mainView} />
      <div className={styles.scroll}>
        <section className={styles.ingredientsSection + ' pt-10'} ref={bunRef}>
          <h2 className="text text_type_main-medium pb-6">Булки</h2>
          <ul className={styles.ingredientTable + ' pl-4 pr-4'}>
            {data.map((item: any) => {
              if (item.type === 'bun') {
                return (
                  <BurgerIngredient
                    key={item._id}
                    data={item}
                    setActivator={setActivator}
                  />
                );
              }
            })}
          </ul>
        </section>
        <section
          className={styles.ingredientsSection + ' pt-10'}
          ref={sauceRef}
        >
          <h2 className="text text_type_main-medium pb-6">Соусы</h2>
          <ul className={styles.ingredientTable + ' pl-4 pr-4'}>
            {data.map((item: any) => {
              if (item.type === 'sauce') {
                return (
                  <BurgerIngredient
                    key={item._id}
                    data={item}
                    setActivator={setActivator}
                  />
                );
              }
            })}
          </ul>
        </section>
        <section className={styles.ingredientsSection + ' pt-10'} ref={mainRef}>
          <h2 className="text text_type_main-medium pb-6">Начинки</h2>
          <ul className={styles.ingredientTable + ' pl-4 pr-4'}>
            {data.map((item: any) => {
              if (item.type === 'main') {
                return (
                  <BurgerIngredient
                    key={item._id}
                    data={item}
                    setActivator={setActivator}
                  />
                );
              }
            })}
          </ul>
        </section>
      </div>
    </section>
  );
};

export default BurgerIngredients;