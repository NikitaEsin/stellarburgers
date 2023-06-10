import React from 'react';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from '../styles/LogIn.module.css';
import { Link } from 'react-router-dom';
import { handleFormSubmit } from '../utils';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { passwordRecovery } from '../services/actions/API'


const PasswordRecovery = () => {
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');
  const navigate = useNavigate();

  return (
    <>
      <section className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.heading + ' text text_type_main-medium mb-6'}>
            Восстановление пароля
          </h1>
          <form onSubmit={(event) => handleFormSubmit(event, passwordRecovery(password, code), navigate('/login', { replace: true }))}>
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
              value={code || ''}
            />
            <Button
              htmlType="submit"
              type="primary"
              size="medium"
            >
              Сохранить
            </Button>
          </form>
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