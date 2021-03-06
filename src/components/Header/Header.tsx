import React from 'react';
import s from './Header.module.scss';
import logo from '../../img/logo.svg'
import SearchForm from "./searchForm";

const Header = () => {
    return (
        <div className={s.header}>
            <div><img src={logo} alt={'logo'}/></div>
            <div className={s.searchForm}><SearchForm/></div>
        </div>)
}
export default Header;
