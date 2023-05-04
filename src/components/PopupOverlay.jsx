import React from "react";

import styles from '../styles/PopupOverlay.module.css'

const PopupOverlay = (props) => {
    return (
        <div className={props.data.activator ? styles.popupOverlayActiv : styles.popupOverlay}>
            {props.children}
        </div>
    );
};

export default PopupOverlay;