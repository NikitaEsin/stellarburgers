import React from "react";

import styles from '../styles/ModalOverlay.module.css'

import PropTypes from 'prop-types';

const ModalOverlay = (props) => {
    ModalOverlay.propTypes = {
        activator: PropTypes.bool,
        setActivator: PropTypes.func
    }; 
    return (
        <div className={props.data.activator ? styles.popupOverlayActiv : styles.popupOverlay}
        onClick={(evt) => {
            if (evt.target === evt.currentTarget){
                props.data.setActivator(false)
            }
        }}>
            {props.children}
        </div>
    );
};

export default ModalOverlay;