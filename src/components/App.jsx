import React, {useEffect, useState} from 'react';
import styles from '../styles/App.module.css'
import Header from './Header';
import BurgerIngredients from './BurgerIngredients';
import BurgerConstructor from './BurgerConstructor';
import Modal from './Modal';
import OrderDetails from './OrderDetails';
import IngredientDetails from './IngredientDetails';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../services/actions';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  const dispatch = useDispatch();
  const { data, dataRequest, dataFailed } = useSelector(
    (state) => state.mainReducer
  );

  useEffect(() => {
    dispatch(getData())
  }, [])

  const [popupOrderActiv, setPopupOrderActiv] = useState(false)
  const [popupIngridiantActiv, setPopupIngridiantActiv] = useState(false)

  if (dataFailed) {
    return <p>Произошла ошибка при получении данных</p>;
  } else if (dataRequest) {
    return <p>Загрузка...</p>;
  } else {
    return(<>
  <Header />
  <main className={styles.main}>
    <Modal activator={popupOrderActiv} setActivator={setPopupOrderActiv}><OrderDetails/></Modal>
    <Modal activator={popupIngridiantActiv} setActivator={setPopupIngridiantActiv}><IngredientDetails/></Modal>
    <DndProvider backend={HTML5Backend}>
      <BurgerIngredients activator={popupIngridiantActiv} setActivator={setPopupIngridiantActiv}/>
      <BurgerConstructor activator={popupOrderActiv} setActivator={setPopupOrderActiv}/>
    </DndProvider>
  </main>
  </>
)}}


export default App;