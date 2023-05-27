import React, { useEffect } from "react";

import styles from '../styles/Table.module.css'

import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';

const Table = (props) => {
    const [current, setCurrent] = React.useState('one')
    useEffect(() => {
      if (props.bun) {
        setCurrent('one');
      } else if (props.sauce) {
        setCurrent('two');
      } else if (props.main) {
        setCurrent('three');
      }
    }, [props.bun, props.sauce, props.main])
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