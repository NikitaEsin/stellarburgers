import React from 'react';

import Header from './components/Header'

import BurgerIngredients from './components/BurgerIngredients'


function App() {
  return(<>
    <Header />
    <main>
      <BurgerIngredients />
    </main>
    </>
  )
}

fetch('https://norma.nomoreparties.space/api/ingredients')
.then((res)  => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
})


export default App;