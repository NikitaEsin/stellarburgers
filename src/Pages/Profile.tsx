import React, { useEffect, useState }  from 'react';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from '../styles/Profile.module.css';
import { useNavigate } from 'react-router-dom';
import { refresh } from '../services/actions/API';
import { request } from '../utils'
import { BurgerIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector, useDispatch } from 'react-redux';
import { DELETE_TOKEN } from '../services/actions/constants';
import { FC } from 'react';

interface IProfile {
  setConstructor: any;
  setProfile: any}

  const Profile: FC<IProfile> = ({
    setConstructor,
    setProfile
  }) => {

    const navigate = useNavigate();
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const {isLoggedIn, token} = useSelector(
      (state: any) => state.tokenReducer
    );
    const dispatch = useDispatch()

    useEffect(() => {
      setConstructor(
        <div className={styles.navIcon + ' pt-4 pb-4 ml-5 mr-5'}>
          <BurgerIcon type="secondary" />
          <p className="text text_type_main-default text_color_inactive pl-2">
            Конструктор
          </p>
        </div>
      );
      setProfile(
        <div className={styles.navIcon + ' pt-4 pb-4 ml-5 mr-5'}>
          <ProfileIcon type="primary" />
          <p className={styles.activeText + ' text text_type_main-default  pl-2'}>
            Личный кабинет
          </p>
        </div>
      );
    }, []);

    useEffect(() => {
      if (!isLoggedIn) {
        refresh();
      }
    }, []);

    const logOut = () => {
      request('/auth/logout', {
        method: 'POST',
        headers: {
          authorization: '91089aeb-9e00-4a3f-9cf9-1d0f7117fd38',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: localStorage.refreshToken,
        }),
      }).then((res) => {
        navigate('/', { replace: true });
        dispatch({type: DELETE_TOKEN})
        localStorage.removeItem('refreshToken');
      });
    };

    const getUserInfo = () => {
        request('/auth/user', {
          method: 'GET',
          headers: {
            authorization: token,
            'Content-Type': 'application/json',
          },
        }).then((res) => {
          setName(res.user.name);
          setEmail(res.user.email);
          setPassword(password);
        });
      };
    
    const editUserInfo = (name: string, email: string, password: string) => {
      request('/auth/user', {
        method: 'PATCH',
        headers: {
          authorization: token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      });
    };
    
    useEffect(() => {
      getUserInfo();
    }, []);
    
    useEffect(() => {
      function onEnter(evt: any) {
        if (evt.key === 'Enter') {
          editUserInfo(name, email, password);
        }
      }
      document.addEventListener('keydown', onEnter);
      return () => {
        document.removeEventListener('keydown', onEnter);
      };
    }, [name, email, password]);
    
  
  return (
    <section className={styles.profile}>
      <div className={styles.profileContainer}>
        <div className={styles.sidebar}>
          <p className={styles.sidebarItem + ' text text_type_main-medium mb-6'}>Профиль</p>
          <p className={styles.sidebarItem + ' text text_type_main-medium mb-6 text_color_inactive'}>
            История заказов
          </p>
          <p className={styles.sidebarItem + ' text text_type_main-medium mb-20 text_color_inactive'} onClick={() => logOut()}>
            Выход
          </p>
          <p className={styles.description + ' text text_type_main-small text_color_inactive'}>
            В этом разделе вы можете изменить свои персональные данные
            </p>
        </div>
        <div className="ml-15">
          <Input 
            placeholder="Имя" 
            icon={'EditIcon'} 
            extraClass="mb-6"
            value={name || ''}
            onChange={(e) => setName(e.target.value)}  />
          <Input 
            placeholder="Логин" 
            icon={'EditIcon'} 
            extraClass="mb-6"
            value={email || ''}
            onChange={(e) => setEmail(e.target.value)} />
          <Input 
            placeholder="Пароль" 
            icon={'EditIcon'} 
            extraClass="mb-6"
            value={password || ''}
            onChange={(e) => setPassword(e.target.value)} />
        </div>
      </div>
    </section>
  );
};

export default Profile;