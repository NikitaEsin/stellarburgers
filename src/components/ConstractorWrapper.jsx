import React from 'react';
import styles from '../styles/BurgerConstructor.module.css';
import PropTypes from 'prop-types';

const ConstractorWrapper = (props) => {
  const id = props.data;

  let element;
  if (props.place === 'top') {
    element = (
      <li className={styles.itemConstructorTop + ' mb-4'}>{props.children}</li>
    );
  } else if (props.place === 'bottom') {
    element = (
      <li className={styles.itemConstructorBottom}>{props.children}</li>
    );
  } else {
    element = (
      <li className={styles.itemConstructor + ' mb-4'}>{props.children}</li>
    );
  }
  return element;
};

ConstractorWrapper.propTypes = {
  data: PropTypes.string,
  place: PropTypes.string,
};

export default ConstractorWrapper;