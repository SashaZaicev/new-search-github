import React from 'react';
import Header from "./Header";
import s from './Header.module.css'

function HeaderContainer() {
    return (
        <div className={s.headerContainer}>
            <Header/>
        </div>
    );
}

export default HeaderContainer