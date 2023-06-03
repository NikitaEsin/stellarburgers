import React from 'react';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from '../../styles/LogIn.module.css';
import { Link } from 'react-router-dom';
import { request } from '../../utils';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const PasswordRecovery = () => {
  const [password, setPassword] = useState();
  const { token } = useSelector((state) => state.tokenReducer);

  const PasswordRecovery = (password) => {
    request('/password-reset/reset', {
      method: 'POST',
      headers: {
        authorization: '91089aeb-9e00-4a3f-9cf9-1d0f7117fd38',
      },
      body: JSON.stringify({
        password: password,
        token: token,
      }),
    }).then((res) => console.log(res));
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
            />
            <Input
              type={'text'}
              placeholder={'Введите код из письма'}
              extraClass="mb-6"
            />
            <Button
              htmlType="button"
              type="primary"
              size="medium"
              onClick={() => PasswordRecovery(password)}
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