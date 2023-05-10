import React from "react";

import styles from '../styles/BurgerConstructor.module.css'

import { ConstructorElement, DragIcon, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';

import img from '../img/bun-02.png'

import PropTypes from 'prop-types';

const BurgerConstructor = (props) => {
    console.log(props)
    BurgerConstructor.propTypes = {
        activator: PropTypes.bool.isRequired,
        setActivator: PropTypes.func.isRequired
    }; 
    return(
        <section className={styles.container + ' pt-25'}>
            <div className={styles.burger}>
                <ConstructorElement
                className={styles.bun}
                type="top"
                isLocked={true}
                text="Краторная булка N-200i (верх)"
                price={20}
                thumbnail={img}
                />
                <div className={styles.scroll}>
                    <div className={styles.itemContainer}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                        text="Краторная булка N-200i"
                        price={30}
                        thumbnail={img}
                        />
                    </div>
                    <div className={styles.itemContainer}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                        text="Краторная булка N-200i"
                        price={30}
                        thumbnail={img}
                        />
                    </div>
                    <div className={styles.itemContainer}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                        text="Краторная булка N-200i"
                        price={30}
                        thumbnail={img}
                        />
                    </div>
                    <div className={styles.itemContainer}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                        text="Краторная булка N-200i"
                        price={30}
                        thumbnail={img}
                        />
                    </div>
                    <div className={styles.itemContainer}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                        text="Краторная булка N-200i"
                        price={30}
                        thumbnail={img}
                        />
                    </div>
                    <div className={styles.itemContainer}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                        text="Краторная булка N-200i"
                        price={30}
                        thumbnail={img}
                        />
                    </div>
                    <div className={styles.itemContainer}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                        text="Краторная булка N-200i"
                        price={30}
                        thumbnail={img}
                        />
                    </div>
                </div>
               <ConstructorElement
                className={styles.bun}
                type="bottom"
                isLocked={true}
                text="Краторная булка N-200i (низ)"
                price={20}
                thumbnail={img}
                />
            </div>
            <div className={styles.box}>
            <div className={styles.cash}>
                <p className="text text_type_digits-medium">770</p>
                <CurrencyIcon type="primary" />
            </div>
            <Button 
            htmlType="button" 
            type="primary" 
            size="large" 
            onClick={() => {
                props.setActivator(true)
            }}
            >Оформить заказ</Button>
            </div>
        </section>
    )
}

export default BurgerConstructor;