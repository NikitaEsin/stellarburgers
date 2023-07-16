import React, { useEffect } from "react";
import styles from '../styles/Table.module.css'
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import { FC } from 'react';

interface ITable {
  bun: boolean;
  sauce: boolean;
  main: boolean;
}

  const Table: FC<ITable> = ({ bun, sauce, main }) => {
    const [current, setCurrent] = React.useState<string>('one')
    useEffect(() => {
      if (bun) {
        setCurrent('one');
      } else if (sauce) {
        setCurrent('two');
      } else if (main) {
        setCurrent('three');
      }
    }, [bun, sauce, main])
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