import React, { useEffect, useState } from 'react';
import styles from '../styles/App.module.css'
import BurgerIngredients from '../components/BurgerIngredients';
import BurgerConstructor from '../components/BurgerConstructor';
import Modal from '../components/Modal';
import OrderDetails from '../components/OrderDetails';
import IngredientDetails from '../components/IngredientDetails';
import { refresh } from '../services/actions/API';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { BurgerIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useAppSelector } from '../Hooks/Hooks';
import { FC } from 'react';

interface IMain  {
  popupOrderActiv: any,
  popupIngridiantActiv: any,
  data: any,
  setPopupOrderActiv: any,
  setPopupIngridiantActiv: any,
  setConstructor: any,
  setProfile: any
}

const Main: FC<IMain> = ({popupOrderActiv, setPopupOrderActiv, data, popupIngridiantActiv, setPopupIngridiantActiv, setProfile, setConstructor}) => {
  const {isLoggedIn} = useAppSelector(
    (state) => state.tokenReducer
  );
  useEffect(() => {
    if (!isLoggedIn && localStorage.refresfToken) {
      refresh();
    }
  }, []);

  useEffect(() => {
    setConstructor(
      <div className={styles.navIcon + ' pt-4 pb-4 ml-5 mr-5'}>
        <BurgerIcon type="primary" />
        <p className={styles.activeText + ' text text_type_main-default pl-2'}>
          Конструктор
        </p>
      </div>
    );
    setProfile(
      <div className={styles.navIcon + ' pt-4 pb-4 ml-5 mr-5'}>
        <ProfileIcon type="secondary" />
        <p className="text text_type_main-default text_color_inactive pl-2">
          Личный кабинет
        </p>
      </div>
    );
  }, []);

    return (
      <>
      <main className={styles.main}>
      <Modal activator={popupOrderActiv} setActivator={setPopupOrderActiv}><OrderDetails/></Modal>
      <DndProvider backend={HTML5Backend}>
        <BurgerIngredients activator={popupIngridiantActiv} setActivator={setPopupIngridiantActiv}/>
        <BurgerConstructor activator={popupOrderActiv} setActivator={setPopupOrderActiv}/>
      </DndProvider>
      </main>
      </>
    );
  };
  
  export default Main;