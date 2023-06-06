import React, { useEffect, useState } from 'react';
import styles from '../../styles/App.module.css'
import BurgerIngredients from '../BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor';
import Modal from '../Modal';
import OrderDetails from '../OrderDetails';
import IngredientDetails from '../IngredientDetails';
import { refresh } from '../../utils';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { BurgerIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const Main = (props) => {
  useEffect(() => {
    props.setConstructor(
      <div className={styles.navIcon + ' pt-4 pb-4 ml-5 mr-5'}>
        <BurgerIcon type="primary" />
        <p className={styles.activeText + ' text text_type_main-default pl-2'}>
          Конструктор
        </p>
      </div>
    );
    props.setProfile(
      <div className={styles.navIcon + ' pt-4 pb-4 ml-5 mr-5'}>
        <ProfileIcon type="secondary" />
        <p className="text text_type_main-default text_color_inactive pl-2">
          Личный кабинет
        </p>
      </div>
    );
  }, []);

  useEffect(() => {
    if (!localStorage.accessToken && localStorage.refresfToken) {
      refresh();
    }
  }, []);

    return (
      <>
      <main className={styles.main}>
      <Modal activator={props.popupOrderActiv} setActivator={props.setPopupOrderActiv}><OrderDetails/></Modal>
      <DndProvider backend={HTML5Backend}>
        <BurgerIngredients activator={props.popupIngridiantActiv} setActivator={props.setPopupIngridiantActiv}/>
        <BurgerConstructor activator={props.popupOrderActiv} setActivator={props.setPopupOrderActiv}/>
      </DndProvider>
      </main>
      </>
    );
  };
  
  export default Main;