import React from "react";
import styles from '../styles/OrderDetails.module.css'
import done from '../img/done.png'
import {  } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from "react-redux";

const OrderDetails = () => {
    const { number } = useSelector(
        (state: any) => state.orderReducer
      );
    return(
        <div className={styles.intel}>
            <p className={styles.shadow + " text text_type_digits-large pt-30"}>{number}</p>
            <p className="text text_type_main-medium pb-15 pt-8">идентификатор заказа</p>
            <img src={done} alt="" />
            <p className="text text_type_main-small pt-15">Ваш заказ начали готовить</p>
            <p className="text text_type_main-default text_color_inactive pb-30 pt-2">Дождитесь готовности на орбитальной станции</p>
        </div>
    )
}

export default OrderDetails;