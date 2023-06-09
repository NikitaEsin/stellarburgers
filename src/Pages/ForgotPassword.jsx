import React, { useState } from 'react';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from '../styles/LogIn.module.css';
import { Link } from 'react-router-dom';
import { request } from '../utils';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
const [email, setEmail] = useState();
const navigate = useNavigate();
  
const getEmailCode = (email) => {
  request('/password-reset', {
    method: 'POST',
    headers: {
      authorization: '91089aeb-9e00-4a3f-9cf9-1d0f7117fd38',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
    }),
  }).then((res) => {
    if (res.success) {
      navigate('/reset-password', { replace: true });
    }
  });
};
  
return (
  <>
    <section className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.heading + ' text text_type_main-medium mb-6'}>
          Восстановление пароля
        </h1>
        <div>
          <Input type={'email'} placeholder={'Укажите e-mail'} extraClass="mb-6" onChange={(e) => setEmail(e.target.value)} value={email || ''} />
          <Button htmlType="button" type="primary" size="medium" onClick={() => getEmailCode(email)}>
            Восстановить
          </Button>
        </div>
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