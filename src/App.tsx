import React, {useState} from 'react';


import Header from './components/Header';

import BurgerIngredients from './components/BurgerIngredients';
import BurgerConstructor from './components/BurgerConstructor';
import Popup from './components/Popup';
import PopupOrder from './components/PopupOrder';
import PopupIngridiant from './components/PopupIngridiant';




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
  <main style={{ display: 'flex', gap: '40px', justifyContent: 'center' }}>
    <Popup activator={popupOrderActiv} setActivator={setPopupOrderActiv}><PopupOrder/></Popup>
    <Popup activator={popupIngridiantActiv} setActivator={setPopupIngridiantActiv}><PopupIngridiant/></Popup>
    <BurgerIngredients activator={popupIngridiantActiv} setActivator={setPopupIngridiantActiv}/>
    <BurgerConstructor activator={popupOrderActiv} setActivator={setPopupOrderActiv}/>
  </main>
  </>
)};


export default App;