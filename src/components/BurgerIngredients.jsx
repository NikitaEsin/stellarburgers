import React from "react";

import styles from '../styles/BurgerIngredients.module.css'

import Table from "./Table";

import PropTypes from 'prop-types';

import { useDrag } from 'react-dnd';

import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';

const BurgerIngredients = (props) => {
    BurgerIngredients.propTypes = {
        activator: PropTypes.bool.isRequired,
        setActivator: PropTypes.func.isRequired
    }; 

    const id = props.data._id;

    const [, dragRef] = useDrag({
        type: 'ingredient',
        item: { id },
      });

    return(
        <section className={styles.container + ' pt-10'}>
            <h1 className="text text_type_main-large mb-5">Соберите бургер</h1>
            <Table/>
            <div className={styles.scroll}>
                <h2 className="text text_type_main-medium pt-10 pb-5">Булки</h2>
                <div className={styles.ingredients}>
                    {props.data.map((item, index) => {
                        if (item.type === 'bun') {
                            return (
                                <div key={index} onClick={() => {
                                    props.setActivator(true) }}
                                    className={styles.card}>
                                        <Counter className={styles.number} count={1} size="default" extraClass="m-1" />
                                        <img src={item.image} alt={item.name} />
                                        <div className={styles.cash}>
                                            <p className="text text_type_digits-default">{item.price}</p>
                                            <CurrencyIcon type="primary" />
                                        </div>
                                        <p className="text text_type_main-small pb-6">{item.name}</p>
                                    </div>
                            )
                        }
                    })}
                </div>
                    <h2 className="text text_type_main-medium pt-10 pb-5">Соусы</h2>
                    <div className={styles.ingredients}>
                        
                    {props.data.map((item) => {
                        if (item.type === 'sauce') {
                            return (
                                <div ref={dragRef} onClick={() => {
                                    props.setActivator(true) }}
                                    className={styles.card}>
                                        <Counter className={styles.number} count={1} size="default" extraClass="m-1" />
                                        <img src={item.image} alt={item.name} />
                                        <div className={styles.cash}>
                                            <p className="text text_type_digits-default">{item.price}</p>
                                            <CurrencyIcon type="primary" />
                                        </div>
                                        <p className="text text_type_main-small pb-6">{item.name}</p>
                                    </div>
                            )
                        }
                    })}
                    </div>
                    <h2 className="text text_type_main-medium pt-10 pb-5">Начинки</h2>
                    <div className={styles.ingredients}>
                    {props.data.map((item) => {
                        if (item.type === 'main') {
                            return (
                                <div onClick={() => {
                                    props.setActivator(true) }}
                                    className={styles.card}>
                                        <Counter className={styles.number} count={1} size="default" extraClass="m-1" />
                                        <img src={item.image} alt={item.name} />
                                        <div className={styles.cash}>
                                            <p className="text text_type_digits-default">{item.price}</p>
                                            <CurrencyIcon type="primary" />
                                        </div>
                                        <p className="text text_type_main-small pb-6">{item.name}</p>
                                    </div>
                            )
                        }
                    })}
                    </div>
            </div>
        </section>
    )
};

export default BurgerIngredients;