import React from "react";

import {
    BurgerIcon,
    ListIcon,
    Logo,
    ProfileIcon,
  } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from '../styles/Header.module.css'

const Header = () => {
    return(
        <header className={styles.header}>
            <section className={styles.header_section}>
                <div className={styles.header_container}>
                    <button className={styles.header_button + ' mt-4 mb-4 pl-5 pr-5'}>
                        <BurgerIcon className={styles.icon} />
                        <p className={styles.header_text}>Конструктор</p>
                    </button>
                    <button className={styles.header_button + ' mt-4 mb-4 pl-5 pr-5'}>
                        <ListIcon type="secondary" className={styles.icon} />
                        <p className="text text_type_main-default text_color_inactive">Лента заказов</p>
                    </button>
                </div>
                <div className={styles.logo}>
                    <Logo />
                </div>
                <button className={styles.header_button + ' mt-4 mb-4 pl-5 pr-5'}>
                    <ProfileIcon type="secondary" className={styles.icon} />
                    <p className="text text_type_main-default text_color_inactive">Личный кабинет</p>
                </button>
            </section>
        </header>
    )
}

export default Header;