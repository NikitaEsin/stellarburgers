import React, { useState } from 'react';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from '../styles/LogIn.module.css';
import { Link } from 'react-router-dom';
import { handleFormSubmit } from '../utils';
import { useNavigate } from 'react-router-dom';
import { getEmailCode } from '../services/actions/API'

const ForgotPassword = () => {
const [email, setEmail] = useState<string>('');
const navigate = useNavigate();
  
return (
  <>
    <section className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.heading + ' text text_type_main-medium mb-6'}>
          Восстановление пароля
        </h1>
        <form onSubmit={(event) => handleFormSubmit(event, getEmailCode(email), navigate('/reset-password', { replace: true }))}>
          <Input type={'email'} placeholder={'Укажите e-mail'} extraClass="mb-6" onChange={(e) => setEmail(e.target.value)} value={email || ''} />
          <Button htmlType="submit" type="primary" size="medium">
            Восстановить
          </Button>
        </form>
        <p className="text text_type_main-default text_color_inactive mt-20">
          Вспомнили пароль?{''}
          <Link to="/login">
            <Button extraClass={styles.button} htmlType="button" type="secondary" size="small">
              Войти
            </Button>
          </Link>
        </p>
      </div>
    </section>
  </>
);
};
  
export default ForgotPassword;