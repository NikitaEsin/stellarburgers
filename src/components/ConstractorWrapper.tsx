import React from 'react';
import styles from '../styles/BurgerConstructor.module.css';
import PropTypes from 'prop-types';
import { FC } from 'react';

interface IConstractorWrapper {
  data: any;
  place: any;
  children?: any;
}

const ConstractorWrapper: FC<IConstractorWrapper> = ({
  data,
  place,
  children,
}) => {
  const id = data;

  let element;
  if (place === 'top') {
    element = (
      <li className={styles.itemConstructorTop + ' mb-4'}>{children}</li>
    );
  } else if (place === 'bottom') {
    element = (
      <li className={styles.itemConstructorBottom}>{children}</li>
    );
  } else {
    element = (
      <li className={styles.itemConstructor + ' mb-4'}>{children}</li>
    );
  }
  return element;
};

export default ConstractorWrapper;