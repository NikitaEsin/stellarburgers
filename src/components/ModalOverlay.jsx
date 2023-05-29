import React, {useEffect} from "react";

import styles from '../styles/ModalOverlay.module.css'

import PropTypes from 'prop-types';

const ModalOverlay = (props) => {
    ModalOverlay.propTypes = {
        activator: PropTypes.bool,
        setActivator: PropTypes.func
    }; 
    const isOpen = props.data.activator
useEffect(() => {
    if (!isOpen) {
      return;
    }
    function closeByEscape(evt) {
      if (evt.key === 'Escape') {
        props.data.setActivator(false);
      }
    }
    document.addEventListener('keydown', closeByEscape);
    return () => {
      document.removeEventListener('keydown', closeByEscape);
    };
  }, [isOpen]);
  console.log(props)
    return (
        <div className={props.data.activator ? styles.popupOverlayActiv : styles.popupOverlay}
        onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
                props.data.setActivator(false)
            }
        }}>
            {props.children}
        </div>
    );
};

export default ModalOverlay;