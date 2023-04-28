import React from "react";

import styles from '../styles/BurgerIngredients.module.css'

import Table from "./Table";

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import bun from '../img/bun-01.png'
import saus from '../img/sauce-01.png'


const BurgerIngredients = () => {
    return(
        <section className={styles.container + ' pt-10'}>
            <h1 className='text text_type_main-big mb-5'>Соберите бургер</h1>
            <Table/>
            <div className={styles.scroll}>
                <h2 className='text text_color_inactive'>Булки</h2>
                <div className={styles.ingredients}>
                    <div className={styles.card}>
                        <img src={bun} alt="" />
                        <p>20</p>
                        <CurrencyIcon type="primary" />
                        <p>Краторная булка N-200i</p>
                    </div>
                    <div>
                        <img src={bun} alt="" />
                        <p>20</p>
                        <CurrencyIcon type="primary" />
                        <p>Краторная булка N-200i</p>
                    </div>
                </div>
                    <h2>Соусы</h2>
                    <div className={styles.ingredients}>
                        
                        <div>
                        <img src={saus} alt="" />
                            <p>20</p>
                            <CurrencyIcon type="primary" />
                            <p>Краторная булка N-200i</p>
                        </div>
                        <div>
                            <img src={saus} alt="" />
                            <p>20</p>
                            <CurrencyIcon type="primary" />
                            <p>Краторная булка N-200i</p>
                        </div>
                        <div>
                            <img src={saus} alt="" />
                            <p>20</p>
                            <CurrencyIcon type="primary" />
                            <p>Краторная булка N-200i</p>
                        </div>
                        <div>
                            <img src={saus} alt="" />
                            <p>20</p>
                            <CurrencyIcon type="primary" />
                            <p>Краторная булка N-200i</p>
                        </div>
                    </div>
            </div>
        </section>
    )
}



export default BurgerIngredients;