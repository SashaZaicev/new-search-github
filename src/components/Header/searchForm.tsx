import React from 'react';
import {getUserTC} from "../../bll/profileReducer";
import {useDispatch, useSelector} from "react-redux";
import search from "../../img/search.svg"
import s from "./Header.module.css"
import {AppRootStateType} from "../../app/store";

const SearchForm = () => {
    const pageNumbers = useSelector((state: AppRootStateType) => state.profile.page)
    const perPageNumber = useSelector((state: AppRootStateType) => state.profile.per_page)

    const dispatch = useDispatch();
    const getUser = (e: React.KeyboardEvent<EventTarget & HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const user = e.currentTarget.value;
            dispatch(getUserTC(user, pageNumbers, perPageNumber));
        }
    }

    return (
        <>
            <img className={s.searchIcon} src={search} alt=""/>
           <input onKeyPress={getUser} type="text" name="username" placeholder='Enter GitHub username'/>
        </>
    );
};

export default SearchForm;