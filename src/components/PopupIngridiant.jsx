import React from "react";

import styles from '../styles/Popup.module.css'



const PopupIngridiant = () => {
    return (
        <div className={styles.intel}>
            <p className="text text_type_main-large">Детали ингредиента</p>
            <img src="" alt="" />
            <p className="text text_type_main-medium">Биокотлета из марсианской Магнолии</p>
            <div>
                <div>
                    <p className="text text_type_main-default text_color_inactive">Калории,ккал</p>
                    <p className="text text_type_main-default text_color_inactive">244,4</p>
                </div>
                <div>
                    <p className="text text_type_main-default text_color_inactive">Белки, г</p>
                    <p className="text text_type_main-default text_color_inactive">12,2</p>
                </div>
                <div>
                    <p className="text text_type_main-default text_color_inactive">Жиры, г</p>
                    <p className="text text_type_main-default text_color_inactive">17,2</p>
                </div>
                <div>
                    <p className="text text_type_main-default text_color_inactive">Углеводы, г</p>
                    <p className="text text_type_main-default text_color_inactive">10,2</p>
                </div>
            </div>
        </div>
    );
};

export default PopupIngridiant;