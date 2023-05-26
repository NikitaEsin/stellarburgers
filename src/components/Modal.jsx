import React, {useEffect} from "react";

import styles from '../styles/Modal.module.css'

import {  } from '@ya.praktikum/react-developer-burger-ui-components';

import PropTypes from 'prop-types';

import ModalOverlay from "./ModalOverlay";

const Modal = (props) => {
    Modal.propTypes = {
        activator: PropTypes.bool.isRequired,
        setActivator: PropTypes.func.isRequired
    }; 
const isOpen = props.activator
useEffect(() => {
    if (!isOpen) {
      return;
    }
    function closeByEscape(evt) {
      if (evt.key === 'Escape') {
        props.setActivator(false);
      }
    }
    document.addEventListener('keydown', closeByEscape);
    return () => {
      document.removeEventListener('keydown', closeByEscape);
    };
  }, [isOpen]);
    return (
        <ModalOverlay data={props}>
            <section className={styles.popupOrder}>
                <div className={styles.popupContainer}>
                    <button 
                    className={styles.CloseIcon} 
                    onClick={() => {
                        props.setActivator(false)
                    }}>
                    </button>
                    {props.children}
                </div>
            </section>
        </ModalOverlay>
    );
};

export default Modal;