import React, {useEffect, useState} from 'react';
import Header from './Header';
import Main from './Pages/Main';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../services/actions';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogIn from './Pages/LogIn';
import Registration from './Pages/Registration';
import ForgotPassword from './Pages/ForgotPassword';
import PasswordRecovery from './Pages/PasswordRecovery'
import Profile from './Pages/Profile';

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
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={
        <Main 
          popupIngridiantActiv={popupIngridiantActiv}
          setPopupIngridiantActiv={setPopupIngridiantActiv}
          popupOrderActiv={popupOrderActiv}
          setPopupOrderActiv={setPopupOrderActiv}
          data={data}
        />}
      />
      <Route path="/login" element={<LogIn />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<PasswordRecovery />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </Router>
  </>
)}}


export default App;