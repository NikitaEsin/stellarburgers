import React, {useState} from 'react';

import styles from './styles/App.module.css'

import Header from './components/Header';

import BurgerIngredients from './components/BurgerIngredients';
import BurgerConstructor from './components/BurgerConstructor';
import Modal from './components/Modal';
import OrderDetails from './components/OrderDetails';
import IngredientDetails from './components/IngredientDetails';




function App() {
  fetch('https://norma.nomoreparties.space/api/ingredients')
.then((res)  => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
})
.then((res) => {
  
})
  const [popupOrderActiv, setPopupOrderActiv] = useState(false)
  const [popupIngridiantActiv, setPopupIngridiantActiv] = useState(false)
    return(<>
  <Header />
  <main className={styles.main}>
    <Modal activator={popupOrderActiv} setActivator={setPopupOrderActiv}><OrderDetails/></Modal>
    <Modal activator={popupIngridiantActiv} setActivator={setPopupIngridiantActiv}><IngredientDetails/></Modal>
    <BurgerIngredients activator={popupIngridiantActiv} setActivator={setPopupIngridiantActiv}/>
    <BurgerConstructor activator={popupOrderActiv} setActivator={setPopupOrderActiv}/>
  </main>
  </>
)};


export default App;