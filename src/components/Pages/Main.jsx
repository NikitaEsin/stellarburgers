import React, {useEffect, useState} from 'react';
import styles from '../../styles/App.module.css'
import BurgerIngredients from '../BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor';
import Modal from '../Modal';
import OrderDetails from '../OrderDetails';
import IngredientDetails from '../IngredientDetails';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const Main = (props) => {
    return (
      <>
      <main className={styles.main}>
      <Modal activator={props.popupOrderActiv} setActivator={props.setPopupOrderActiv}><OrderDetails/></Modal>
      <Modal activator={props.popupIngridiantActiv} setActivator={props.setPopupIngridiantActiv}><IngredientDetails/></Modal>
      <DndProvider backend={HTML5Backend}>
        <BurgerIngredients activator={props.popupIngridiantActiv} setActivator={props.setPopupIngridiantActiv}/>
        <BurgerConstructor activator={props.popupOrderActiv} setActivator={props.setPopupOrderActiv}/>
      </DndProvider>
      </main>
      </>
    );
  };
  
  export default Main;