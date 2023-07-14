import React, {useEffect} from "react";
import styles from '../styles/ModalOverlay.module.css'
import { useNavigate } from 'react-router-dom';
import { FC } from 'react';

interface IModalOverlay {
  activator: boolean;
  children?: any;
  setActivator: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalOverlay: FC<IModalOverlay> = ({ activator, children, setActivator }) => {
  const navigate = useNavigate();
  const isOpen = activator;
useEffect(() => {
    if (!isOpen) {
      return;
    }
    function closeByEscape(evt: any) {
      if (evt.key === 'Escape') {
        setActivator(false);
      }
    }
    document.addEventListener('keydown', closeByEscape);
    return () => {
      document.removeEventListener('keydown', closeByEscape);
    };
  }, [isOpen]);
    return (
        <div className={activator ? styles.popupOverlayActiv : styles.popupOverlay}
        onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
                setActivator(false)
            }
        }}>
            {children}
        </div>
    );
};

export default ModalOverlay;