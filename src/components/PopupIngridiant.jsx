import React from "react";

import styles from '../styles/PopupIngridiant.module.css'

import meat from '../img/meat-01.png'

const PopupIngridient = () => {
    return (
        <div className={styles.intel}>
            <p className="text text_type_main-large pt-10">Детали ингредиента</p>
            <img src={meat} alt="" />
            <p className="text text_type_main-medium pt-4">Биокотлета из марсианской Магнолии</p>
            <div className={styles.list + ' pb-15 pt-8'}>
                <div className={styles.block}>
                    <p className="text text_type_main-default text_color_inactive">Калории,ккал</p>
                    <p className="text text_type_digits-default text_color_inactive">244,4</p>
                </div>
                <div className={styles.block}>
                    <p className="text text_type_main-default text_color_inactive">Белки, г</p>
                    <p className="text text_type_digits-default text_color_inactive">12,2</p>
                </div>
                <div className={styles.block}>
                    <p className="text text_type_main-default text_color_inactive">Жиры, г</p>
                    <p className="text text_type_digits-default text_color_inactive">17,2</p>
                </div>
                <div className={styles.block}>
                    <p className="text text_type_main-default text_color_inactive">Углеводы, г</p>
                    <p className="text text_type_digits-default text_color_inactive">10,2</p>
                </div>
            </div>
        </div>
    );
};

export default PopupIngridient;