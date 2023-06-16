import React from "react";

import styles from '../styles/IngredientDetails.module.css'

import { useSelector } from "react-redux";

const IngredientDetails = () => {
    const { data } = useSelector(
        (state: any) => state.infoReducer
      );
    return (
        <div className={styles.intel}>
            <h1 className="text text_type_main-large pt-10">Детали ингредиента</h1>
            <img src={data.image} alt="" />
            <p className="text text_type_main-medium pt-4">{data.name}</p>
            <div className={styles.list + ' pb-15 pt-8'}>
                <div className={styles.block}>
                    <p className="text text_type_main-default text_color_inactive">Калории,ккал</p>
                    <p className="text text_type_digits-default text_color_inactive">{data.calories}</p>
                </div>
                <div className={styles.block}>
                    <p className="text text_type_main-default text_color_inactive">Белки, г</p>
                    <p className="text text_type_digits-default text_color_inactive">{data.proteins}</p>
                </div>
                <div className={styles.block}>
                    <p className="text text_type_main-default text_color_inactive">Жиры, г</p>
                    <p className="text text_type_digits-default text_color_inactive">{data.fat}</p>
                </div>
                <div className={styles.block}>
                    <p className="text text_type_main-default text_color_inactive">Углеводы, г</p>
                    <p className="text text_type_digits-default text_color_inactive">{data.carbohydrates}</p>
                </div>
            </div>
        </div>
    );
};

export default IngredientDetails;