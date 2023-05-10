import React from "react";

import styles from '../styles/ModalOverlay.module.css'

import PropTypes from 'prop-types';

const ModalOverlay = (props) => {
    console.log(props)
    ModalOverlay.propTypes = {
        activator: PropTypes.bool,
        setActivator: PropTypes.func
    }; 
    return (
        <div className={props.data.activator ? styles.popupOverlayActiv : styles.popupOverlay}
        onClick={() => {
            props.data.setActivator(false)
        }}>
            {props.children}
        </div>
    );
};

export default ModalOverlay;