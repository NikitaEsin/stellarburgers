import React, { useState } from 'react';
import styles from '../../styles/LogIn.module.css';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { request } from '../../utils';

const LogIn = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const auth = (email, password) => {
    request('/auth/login', {
      method: 'POST',
      headers: {
        authorization: '91089aeb-9e00-4a3f-9cf9-1d0f7117fd38',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then((res) => {
      if (res.success) {
        navigate('/', { replace: true });
        localStorage.setItem('accessToken', res.accessToken);
        localStorage.setItem('refreshToken', res.refreshToken);
      }
    });
  };

  return (
    <section className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.heading + ' text text_type_main-medium mb-6'}>
          Вход
        </h1>
        <div>
          <Input type={'email'} placeholder={'E-mail'} extraClass="mb-6" onChange={(e) => setEmail(e.target.value)} />
          <Input type={'password'} placeholder={'Пароль'} icon={'ShowIcon'} extraClass="mb-6" onChange={(e) => setPassword(e.target.value)} />
          <Button htmlType="button" type="primary" size="medium" onClick={() => auth(email, password)} >
            Войти
          </Button>
        </div>
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