import React, {useEffect, useState} from 'react';
import styles from '../styles/App.module.css';
import Header from './Header';
import Main from '../Pages/Main';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../services/actions';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogIn from '../Pages/LogIn';
import Registration from '../Pages/Registration';
import ForgotPassword from '../Pages/ForgotPassword';
import PasswordRecovery from '../Pages/PasswordRecovery'
import Profile from '../Pages/Profile';
import { NotSignedProtectedRoute } from './NotSignedProtectedRoute';
import { SignedProtectedRoute } from './SignedProtectedRoute';
import { BurgerIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Ingredient from '../Pages/Ingredient';
import { useLocation } from 'react-router-dom';
import Modal from './Modal';
import IngredientDetails from './IngredientDetails';
import OrderDetails from './OrderDetails';

function App() {
  const dispatch: any = useDispatch();
  const [constructor, setConstructor] = useState(
    <div className={styles.navIcon + ' pt-4 pb-4 ml-5 mr-5'}>
      <BurgerIcon type="primary" />
      <p className={styles.activeText + ' text text_type_main-default pl-2'}>
        Конструктор
      </p>
    </div>
  );
  const [profile, setProfile] = useState(
    <div className={styles.navIcon + ' pt-4 pb-4 ml-5 mr-5'}>
      <ProfileIcon type="secondary" />
      <p className="text text_type_main-default text_color_inactive pl-2">
        Личный кабинет
      </p>
    </div>
  );
  const { data, dataRequest, dataFailed } = useSelector(
    (state: any) => state.mainReducer
  );

  useEffect(() => {
    dispatch(getData())
  }, [])

  const [popupOrderActiv, setPopupOrderActiv] = useState(false)
  const [popupIngridiantActiv, setPopupIngridiantActiv] = useState(false)

  const location = useLocation();
  const background = location.state && location.state.background;

  if (dataFailed) {
    return <p>Произошла ошибка при получении данных</p>;
  } else if (dataRequest) {
    return <p>Загрузка...</p>;
  } else {
    return(<>
    <Header profile={profile} constructor={constructor} />
    <Routes location={background || location}>
      <Route path="/" element={
        <Main 
          popupOrderActiv={popupOrderActiv}
          setPopupOrderActiv={setPopupOrderActiv}
          popupIngridiantActiv={popupIngridiantActiv}
          setPopupIngridiantActiv={setPopupIngridiantActiv}
          data={data}
          setConstructor={setConstructor}
          setProfile={setProfile}
        />}
      />
      <Route path="/login"  element={<SignedProtectedRoute element={<LogIn />} />} />
      <Route path="/register" element={<SignedProtectedRoute element={<Registration />} />} />
      <Route path="/forgot-password" element={<SignedProtectedRoute element={<ForgotPassword />} />} />
      <Route path="/reset-password" element={<SignedProtectedRoute element={<PasswordRecovery />} />} />
      <Route path="/profile" element={<NotSignedProtectedRoute element={<Profile setConstructor={setConstructor} setProfile={setProfile} />} />} />
      <Route path="/ingredients/:_id" element={<Ingredient data={data} />} />
    </Routes>
    {background && (
      <Routes>
        <Route path='/ingredients/:_id'
        element={
          <Modal activator={popupIngridiantActiv} setActivator={setPopupIngridiantActiv}><IngredientDetails/></Modal>
        }>
        </Route>
      </Routes>
    )}
  </>
)}}


export default App;