import React from 'react';
import {useSelector} from "react-redux";
import s from "../ResultSection/Result.module.css";
import search from "../../img/search.svg";

export const Result = () => {

    const resUser = useSelector(state => state.profile.repos)
    const userName = resUser.name === "" ? "User don't have name" : "Name: " + resUser.name + "; ";
    const userId = resUser.id === "" ? "User don't have id" : "User id: " + resUser.id + "; ";
    const userLocation = resUser.location === "" ? "User don't have location" : "Location: " + resUser.location;
    return (
        <div className={s.result}>
            {resUser.name ?
                (
                    <div><a href={resUser.html_url}><img src={resUser.avatar_url} alt=""/></a>
                        <div>
                            <span>{userName}</span>
                            <span>{userId}</span>
                            <span>{userLocation}</span>
                        </div>
                    </div>
                ) :
                <div className={s.initResult}>
                    <img className={s.searchIcon} src={search} alt=""/>
                    <span>Start with searching a GitHub user</span>
                </div>}
            {/*{resUser ?*/}
            {/*    <p>Number of repositories {resUser.avatar_url}</p>*/}
            {/*    : <p>Write another users</p>}*/}
        </div>
    )
}

