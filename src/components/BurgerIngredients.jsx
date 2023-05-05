import React from "react";

import styles from '../styles/BurgerIngredients.module.css'

import Table from "./Table";

import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';

import bun from '../img/bun-01.png'
import saus from '../img/sauce-01.png'
import ingredient from '../img/sauce-02.png'


const BurgerIngredients = (props) => {
    console.log(props)
    return(
        <section className={styles.container + ' pt-10'}>
            <h1 className="text text_type_main-large mb-5">Соберите бургер</h1>
            <Table/>
            <div className={styles.scroll}>
                <h2 className="text text_type_main-medium pt-10 pb-5">Булки</h2>
                <div className={styles.ingredients}>
                    <div onClick={() => {
                    props.setActivator(true) }}
                    className={styles.card}>
                        <Counter className={styles.number} count={1} size="default" extraClass="m-1" />
                        <img src={bun} alt="" />
                        <div className={styles.cash}>
                            <p className="text text_type_digits-default">20</p>
                            <CurrencyIcon type="primary" />
                        </div>
                        <p className="text text_type_main-small pb-6">Краторная булка N-200i</p>
                    </div>
                    <div onClick={() => {
                    props.setActivator(true) }}
                    className={styles.card}>
                        <img src={bun} alt="" />
                        <div className={styles.cash}>
                            <p className="text text_type_digits-default">20</p>
                            <CurrencyIcon type="primary" />
                        </div>
                        <p className="text text_type_main-small pb-6">Краторная булка N-200i</p>
                    </div>
                </div>
                    <h2 className="text text_type_main-medium pt-10 pb-5">Соусы</h2>
                    <div className={styles.ingredients}>
                        <div onClick={() => {
                            props.setActivator(true) }}
                            className={styles.card}>
                            <img src={saus} alt="" />
                            <div className={styles.cash}>
                                <p className="text text_type_digits-default">30</p>
                                <CurrencyIcon type="primary" />
                            </div>
                            <p className="text text_type_main-small pb-6">Соус фирменный Space Sauce</p>
                        </div>
                        <div onClick={() => {
                            props.setActivator(true) }}
                            className={styles.card}>
                            <img src={saus} alt="" />
                            <div className={styles.cash}>
                                <p className="text text_type_digits-default">30</p>
                                <CurrencyIcon type="primary" />
                            </div>
                            <p className="text text_type_main-small pb-6">Соус фирменный Space Sauce</p>
                        </div>
                        <div onClick={() => {
                            props.setActivator(true) }}
                            className={styles.card}>
                            <Counter className={styles.number} count={1} size="default" extraClass="m-1" />
                            <img src={saus} alt="" />
                            <div className={styles.cash}>
                                <p className="text text_type_digits-default">30</p>
                                <CurrencyIcon type="primary" />
                            </div>
                            <p className="text text_type_main-small pb-6">Соус фирменный Space Sauce</p>
                        </div>
                        <div onClick={() => {
                            props.setActivator(true) }}
                            className={styles.card}>
                            <img src={saus} alt="" />
                            <div className={styles.cash}>
                                <p className="text text_type_digits-default">30</p>
                                <CurrencyIcon type="primary" />
                            </div>
                            <p className="text text_type_main-small pb-6">Соус фирменный Space Sauce</p>
                        </div>
                    </div>
                    <h2 className="text text_type_main-medium pt-10 pb-5">Начинки</h2>
                    <div className={styles.ingredients}>
                        <div onClick={() => {
                            props.setActivator(true) }}
                            className={styles.card}>
                            <img src={ingredient} alt="" />
                            <div className={styles.cash}>
                                <p className="text text_type_digits-default">80</p>
                                <CurrencyIcon type="primary" />
                            </div>
                            <p className="text text_type_main-small pb-6">Соус Spicy-X</p>
                        </div>
                        <div onClick={() => {
                            props.setActivator(true) }}
                            className={styles.card}>
                            <img src={ingredient} alt="" />
                            <div className={styles.cash}>
                                <p className="text text_type_digits-default">80</p>
                                <CurrencyIcon type="primary" />
                            </div>
                            <p className="text text_type_main-small pb-6">Соус Spicy-X</p>
                        </div>
                        <div onClick={() => {
                            props.setActivator(true) }}
                            className={styles.card}>
                            <img src={ingredient} alt="" />
                            <div className={styles.cash}>
                                <p className="text text_type_digits-default">80</p>
                                <CurrencyIcon type="primary" />
                            </div>
                            <p className="text text_type_main-small pb-6">Соус Spicy-X</p>
                        </div>
                        <div onClick={() => {
                            props.setActivator(true) }}
                            className={styles.card}>
                            <img src={ingredient} alt="" />
                            <div className={styles.cash}>
                                <p className="text text_type_digits-default">80</p>
                                <CurrencyIcon type="primary" />
                            </div>
                            <p className="text text_type_main-small pb-6">Соус Spicy-X</p>
                        </div>
                    </div>
            </div>
        </section>
    )
};

export default BurgerIngredients;