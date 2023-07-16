import React  from "react";
import styles from '../styles/Modal.module.css'
import {  } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import ModalOverlay from './ModalOverlay';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface IModal {
    activator: boolean;
    children?: any;
    setActivator: React.Dispatch<React.SetStateAction<boolean>>;
    data?: any;
  }  

const Modal: FC<IModal> = ({ activator, children, setActivator }) => {
    const navigate = useNavigate();
    return (
        <ModalOverlay activator={activator} setActivator={setActivator}>
            <section className={styles.popupOrder}>
                <div className={styles.popupContainer}>
                    <button 
                    className={styles.CloseIcon} 
                    onClick={() => {
                        setActivator(false)
                        
                    }}>
                    </button>
                    {children}
                </div>
            </section>
        </ModalOverlay>
    );
};

export default Modal;