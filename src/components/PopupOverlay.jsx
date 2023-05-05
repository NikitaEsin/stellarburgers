import React from "react";

import styles from '../styles/PopupOverlay.module.css'

const PopupOverlay = (props) => {
    console.log(props)
    return (
        <div className={props.data.activator ? styles.popupOverlayActiv : styles.popupOverlay}
        onClick={() => {
            props.data.setActivator(false)
        }}>
            {props.children}
        </div>
    );
};

export default PopupOverlay;