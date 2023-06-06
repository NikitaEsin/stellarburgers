import React from 'react';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from '../../styles/LogIn.module.css';
import { Link } from 'react-router-dom';
import { request } from '../../utils';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const PasswordRecovery = () => {
  const [password, setPassword] = useState();
  const [code, setCode] = useState();
  const navigate = useNavigate();


  const PasswordRecovery = (password, code) => {
    request('/password-reset/reset', {
      method: 'POST',
      headers: {
        authorization: '91089aeb-9e00-4a3f-9cf9-1d0f7117fd38',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        password: password,
        token: code,
      }),
    }).then((res) => navigate('/login', { replace: true }));
  };
  return (
    <>
      <section className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.heading + ' text text_type_main-medium mb-6'}>
            Восстановление пароля
          </h1>
          <div>
            <Input
              type={'password'}
              placeholder={'Введите новый пароль'}
              extraClass="mb-6"
              onChange={(e) => setPassword(e.target.value)}
              value={password || ''}
            />
            <Input
              type={'text'}
              placeholder={'Введите код из письма'}
              extraClass="mb-6"
              onChange={(e) => setCode(e.target.value)}
            />
            <Button
              htmlType="button"
              type="primary"
              size="medium"
              onClick={() => PasswordRecovery(password, code)}
            >
              Сохранить
            </Button>
          </div>
          <p className="text text_type_main-default text_color_inactive mt-20">
            Вспомнили пароль?{''}
            <Link to="/login">
              <Button
                extraClass={styles.button}
                htmlType="button"
                type="secondary"
                size="small"
              >
                Войти
              </Button>
            </Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default PasswordRecovery;