import React from "react";

import styles from '../styles/Popup.module.css'

import {  } from '@ya.praktikum/react-developer-burger-ui-components';

import PopupOrder from "./PopupOrder";
import PopupOverlay from "./PopupOverlay";



const Popup = (props) => {
    return (
        <PopupOverlay data={props}>
            <section className={styles.popupOrder}>
                <div className={styles.popupContainer}>
                    <button 
                    className={styles.closeButton} 
                    onClick={() => {
                        props.setActivator(false)
                    }}>
                    </button>
                    <PopupOrder />
                </div>
            </section>
        </PopupOverlay>
    );
};

export default Popup;