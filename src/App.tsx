import React, {useState} from 'react';


import Header from './components/Header';

import BurgerIngredients from './components/BurgerIngredients';
import BurgerConstructor from './components/BurgerConstructor';
import Popup from './components/Popup';




function App() {
  const [popupOrderActiv, setPopupOrderActiv] = useState(false)
  return(<>
    <Header />
    <main style={{ display: 'flex', gap: '40px', justifyContent: 'center' }}>
      <BurgerIngredients />
      <Popup activator={popupOrderActiv} setActivator={setPopupOrderActiv}/>
      <BurgerConstructor activator={popupOrderActiv} setActivator={setPopupOrderActiv}/>
    </main>
    </>
  )
};

fetch('https://norma.nomoreparties.space/api/ingredients')
.then((res)  => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
})
.then((res) => {
  console.log(res)
})


export default App;