import React from "react";

import styles from '../styles/Table.module.css'

import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';

const Table = () => {
    const [current, setCurrent] = React.useState('one')
    return (
      <div className={styles.table}>
        <Tab value="one" active={current === 'one'} onClick={setCurrent}>
        Булки
        </Tab>
        <Tab value="two" active={current === 'two'} onClick={setCurrent}>
        Соусы
        </Tab>
        <Tab value="three" active={current === 'three'} onClick={setCurrent}>
        Начинки
        </Tab>
      </div>
    )
}

export default Table;