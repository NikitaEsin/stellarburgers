import React from "react";
import {
    BurgerIcon,
    ListIcon,
    Logo,
    ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css'
import { FC } from "react";

interface IHeader {
    constructor: any,
    profile: any,
}

const Header: FC<IHeader> = ({constructor, profile}) => {
    
    return(
        <header className={styles.header}>
            <section className={styles.header_section}>
                <div className={styles.header_container}>
                    <Link style={{ textDecoration: 'none' }} to="/">
                        {constructor}
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to="/feed">
                      <button className={styles.header_button + ' mt-4 mb-4 pl-5 pr-5'}>
                          <ListIcon type="secondary"  />
                          <p className="text text_type_main-default text_color_inactive">Лента заказов</p>
                      </button>
                    </Link>
                </div>
                <div className={styles.logo}>
                    <Logo />
                </div>
                <Link style={{ textDecoration: 'none' }} to="/profile">
                    {profile}
                </Link>
            </section>
        </header>
    )
}

export default Header;