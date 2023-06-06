import React, { useState } from 'react';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from '../../styles/LogIn.module.css';
import { request } from '../../utils';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Registration = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const navigate = useNavigate();

  const register = (email, password, name) => {
    request('/auth/register', {
      method: 'POST',
      headers: {
        authorization: '91089aeb-9e00-4a3f-9cf9-1d0f7117fd38',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
      }),
    }).then((res) => {
      if (res.success) {
        navigate('/login', { replace: true });
      }
    });
  };
  return (
    <section className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.heading + ' text text_type_main-medium mb-6'}>
          Регистрация
        </h1>
        <div>
          <Input type={'text'} placeholder={'Имя'} extraClass="mb-6" onChange={(e) => setName(e.target.value)} value={name || ''}/>
          <Input type={'email'} placeholder={'e-mail'} extraClass="mb-6" onChange={(e) => setEmail(e.target.value)} value={email || ''}/>
          <Input type={'password'} placeholder={'Пароль'} icon={'ShowIcon'} extraClass="mb-6" onChange={(e) => setPassword(e.target.value)} value={password || ''}/>
          <Button htmlType="button" type="primary" size="medium" 
          onClick={() => {
            register(email, password, name);
          }}
          >
            Зарегестрироваться
          </Button>
        </div>
        <p className="text text_type_main-default text_color_inactive mt-20">
          Уже зарегестрированы?{''}
          <Link to="/login">
            <Button extraClass={styles.button} htmlType="button" type="secondary" size="small">
                Войти
            </Button>
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Registration;