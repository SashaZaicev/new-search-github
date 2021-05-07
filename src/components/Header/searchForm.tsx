import React from 'react';
import {getUserTC} from "../../bll/profileReducer";
import {useDispatch} from "react-redux";
import search from "../../img/search.svg"
import s from "./Header.module.css"

const SearchForm = () => {
    const dispatch = useDispatch();
    const getUser = (e: any) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const user = e.currentTarget.value;
            dispatch(getUserTC(user))
        }
    }

    return (
        <>
            <img className={s.searchIcon} src={search} alt=""/>
            <input onKeyPress={getUser} type="text" name="username" placeholder='Enter GitHub username'/>
            {/*<button type="submit">Find user</button>*/}
        </>
    );
};

export default SearchForm;