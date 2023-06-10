import React, { useState } from 'react';
import styles from '../styles/LogIn.module.css';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { handleFormSubmit } from '../utils';
import { auth } from '../services/actions/API'

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  return (
    <section className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.heading + ' text text_type_main-medium mb-6'}>
          Вход
        </h1>
        <form onSubmit={(event) => handleFormSubmit(event, auth(email, password), navigate('/', { replace: true }))}>
          <Input type={'email'} placeholder={'E-mail'} extraClass="mb-6" onChange={(e) => setEmail(e.target.value)} value={email || ''}  />
          <Input type={'password'} placeholder={'Пароль'} icon={'ShowIcon'} extraClass="mb-6" onChange={(e) => setPassword(e.target.value)} value={password || ''} />
          <Button htmlType="submit" type="primary" size="medium" >
            Войти
          </Button>
        </form>
        <p className="text text_type_main-default text_color_inactive mt-20">
        Вы — новый пользователь?{''}
          <Link to="/register">
            <Button extraClass={styles.button} htmlType="button" type="secondary" size="small">
            Зарегистрироваться
            </Button>
          </Link>
        </p>
        <p className="text text_type_main-default text_color_inactive mt-4">
          Забыли пароль?{''}
          <Link to="/forgot-password">
            <Button extraClass={styles.button} htmlType="button" type="secondary" size="small">
              Восстановить пароль
            </Button>
          </Link>
        </p>
      </div>
    </section>
  );
};

export default LogIn;